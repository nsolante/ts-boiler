interface SeniorDev {
  kind: "Senior";
  responsibility: "large";
  pay: string;
}
interface MidDev {
  kind: "Mid";
  responsibility: "medium";
  radius: string;
}
interface JuniorDev {
  kind: "Junior";
  responsibility: "small";
  radius: string;
}

type Dev = SeniorDev | MidDev | JuniorDev;

function job(s: Dev): string {
  switch (s.kind) {
    case "Junior":
      return "Pay is 90,000";
    case "Mid":
      return "Pay is 120,000";
    case "Senior":
      return "Pay is 180,000";
  }
}

export default job;
