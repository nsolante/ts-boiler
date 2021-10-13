import amqp from "amqplib/callback_api";

amqp.connect("amqp://localhost", (error0, connection) => {
  if (error0) {
    throw error0;
  }
  connection.createChannel((error1, channel) => {
    if (error1) {
      throw error1;
    }
    const queue = "hello";
    const msg = "Hello world";

    channel.assertQueue(queue, {
      durable: false,
    });

    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

    let i = 0;
    do {
      (async () => {
        await delay(1000);
        channel.sendToQueue(queue, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
      })();
      i++;
    } while (i < 20);
  });
});
