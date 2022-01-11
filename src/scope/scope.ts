{
  let usefulVar = "nope";
}

const functionThang = () => {
  let gerber = "mola";
  console.log(usefulVar);
  console.log(gerber);
  function hello() {
    console.log(gerber);
    console.log("germs");
  }
  return hello;
};

function thing() {
  let hello = "no";
}

functionThang()();

// {
//   const hello = "me ";
// }
// function thing() {
//   const things = "string";
// }
// {
//   const hello = "not me ";
// }

// (() => {})();
//
// function declare() {
//   const helloUseful = "thang";
//   console.log(helloUseful);
// }

// console.log(gerber);

// {
//   const marsheree = "hohoho";
//   console.log(marsheree);
// }

// Block Scope
// {
//   const hello = "Hello G!";
//   console.log(hello); // 'Hello G!
// }
//
// console.log(hello); // Error, hello is not defined

// block scope is a subset of function scope since functions need to be declared with a brace
// unless your using an arrow function with implicit return

// like so
// const merry = () => "christmas";

// functions do not have access to other functions scope

// function first () {
//    const firstFunctionVariable = `I'm part of first`
//  }
//
//  function second () {
//    first()
//    console.log(firstFunctionVariable)
//  }

// nested scope/ lexical scope

function outerFunction() {
  const outer = `I'm the outer function!`;

  function innerFunction() {
    const inner = `I'm the inner function!`;
    console.log(inner); // I'm the outer function!
    console.log(outer);
  }

  // console.log(inner); // Error, inner is not defined
  console.log(outer);
}

outerFunction();
