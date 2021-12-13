doesThisWork();
doesItWork();
export const doesItWork = () => {
  console.log("hello");
};

export function doesThisWork() {
  console.log("hello there");
}
doesItWork();
doesThisWork();
// this can be confusing as you've declared your function way after your using it so its best to declare them before actually using them
