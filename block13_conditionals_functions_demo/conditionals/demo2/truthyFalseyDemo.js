// const userName = prompt("Please  enter your name");

// if (userName) {
//   alert("Hello, " + userName + "!");
// }

// const userNumber = parseInt(prompt("Please enter your favorite number"));

// console.log(typeof userName);

// if(userNumber){
//     alert("Your number is " + userNumber)
// }

// 0 is Falsey, so the if-block will never run:

if(0){
    alert("Stuff that will never be seen by the world!")
}else{
    ("The value was falsy, letting you know from the else-block")
}

if(NaN){
    alert("I wont ever see the world!")
}else{
    alert("I bring the sad tidings from NaN")
}