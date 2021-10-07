import job from "./TaggedUnionTypes";

console.log(job({ kind: "Junior", responsibility: "small", radius: "small" }));

// Control flow based type analysis
function foo(x: string | number) {
  if (typeof x === "string") {
    x; // type of x is string here
    x = 1;
    x; // type of x is number here
  }
  x; // type of x is number | boolean here
}

foo(21);

// Tagged union types

interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}
type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  // In the following switch statement, the type of s is narrowed in each case clause
  // according to the value of the discriminant property, thus allowing the other properties
  // of that variant to be accessed without a type assertion.
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.width * s.height;
    case "circle":
      return Math.PI * s.radius * s.radius;
  }
}
function test1(s: Shape) {
  if (s.kind === "square") {
    console.log(`hello square ${s.kind}`); // Square
  } else {
    s; // Rectangle | Circle
  }
}
function test2(s: Shape) {
  if (s.kind === "square" || s.kind === "rectangle") {
    return;
  }
  s; // Circle
}

test1({ kind: "square", size: 1 });

console.log(area({ kind: "square", size: 2 }));
