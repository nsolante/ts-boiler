function outerFunction() {
  const outer = `I see the outer variable!`;

  function innerFunction() {
    console.log(outer);
  }

  return innerFunction;
}

const hello = outerFunction() | outerFunction()(); // I see the outer variable!

// or

function outerFunction() {
  const outer = `I see the outer variable!`;

  return {
    innerFunction() {
      console.log(outer);
    },
  };
}

const { innerFunction } = outerFunction();

innerFunction();

//Since closures have access to the variables in the outer function, they are usually used for two things:
//
//   To control side effects
//   To create private variables
