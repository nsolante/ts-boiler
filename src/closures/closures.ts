const meNo = " likey";

function outerFunction() {
  const outer = `I see the outer variable!`;

  function innerFunction() {
    const innerMe = "hello";
    console.log(innerMe);
    console.log(outer);
    console.log(meNo);
  }

  return innerFunction;
}

// function oun() {
//   console.log(meNo);
// }

// oun();
outerFunction()();

// function name (args ) use (variable){}

// const hello =  outerFunction()(); // I see the outer variable!
//
// // or
//
// function outerFunction() {
//   const outer = `I see the outer variable!`;
//
//   return {
//     innerFunction() {
//       console.log(outer);
//     },
//   };
// }
//
// const { innerFunction } = outerFunction();
//
// innerFunction();

//Since closures have access to the variables in the outer function, they are usually used for two things:
//
//   To control side effects
//   To create private variables
