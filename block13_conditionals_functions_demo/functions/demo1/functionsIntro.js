// 'declaring the function, a.k.a. 'function declaration
// -function declarations are one way we create a function in JS

function addTwoNums() {
  // body of the function / "function body"
  const firstNum = 1;
  const secondNum = 2;
  const sum = firstNum + secondNum;
  console.log(sum);
}

// function call, a.k.a. function invocation - 'call the function' or 'invoke the function'
// this is how we use a function in JS (and all other general purpose programming (GPP) languages with functions)

// addTwoNums();

// addTwoNums();

// note this function declaration has PARAMETERS num1 and num2

function addTwoNumsImproved(num1 = 0, num2 = 0) {
    // first try to convert arguments to integers
  num1 = parseInt(num1);
  num2 = parseInt(num2);
//   type checking
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter two valid numbers");
    return;
  }
//   if type checking passes, do the function's logic
  console.log(num1);
  console.log(num2);
  console.log(num1 + num2);
  return num1 + num2;
}

// note the function call here (for the function with parameters) takes ARGUMENTS

const sum1 = addTwoNumsImproved(3, 5);
console.log(sum1);
addTwoNumsImproved(300, 500);
addTwoNumsImproved(220);
addTwoNumsImproved("220", "220");
addTwoNumsImproved(1, "smith");

// const firstNum = parseInt(
//   prompt("Please enter the first number you want to add:")
// );
// const secondNum = parseInt(
//   prompt("Please enter the second number you want to add:")
// );
// const sum = firstNum + secondNum;
// alert("Your sum is " + sum);
