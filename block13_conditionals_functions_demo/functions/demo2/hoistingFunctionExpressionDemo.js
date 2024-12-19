// function addTwoNums(num1, num2) {
//   return num1 + num2;
// }
// console.log(addTwoNums(5, 3));

// console.log(addTwoNums(addTwoNums(54, 66), 66));
// const myVar = "Hello";
// console.log(myVar);

// // function expression (compare to function declaration)
// const addTwoNumsArrow = (num1, num2) => {
//   // function body is here
//   console.log(num1 + num2);
//   return num1 + num2;
// };

// addTwoNumsArrow(2, 3);

// has no parameters, a one-line function body, returns exactly one value, a string
// rule 1: when you have ZERO paramters, you must use ();
// rule 2: when your function's body has EXACTLY one line, {} are optional;
// rule 3: if you omit the {}, you must ALSO omit the return keyword, but if you keep {},
// you must use return keyword to return any values
const arrowOne = () => "Hello from Arrow";
// const arrowOne = () => {
//   return "Hello from Arrow";
// }

console.log(arrowOne());

// Rule 1a. when you have exactly one paramter, you may omit ()
// Rule 1b. when you have MORE THAN ONE paramater, you must use ()
// Rule 4: if your function's body has MORE THAN ONE line, you MUST use {}

const arrowTwo = userName => "Hello, ${userName}!";

console.log(arrowTwo("John"));

const arrowThree = (num1, num2) => {
  console.log(num1 + num2);
  return num1 + num2;
};

console.log(arrowThree(56, 65));
