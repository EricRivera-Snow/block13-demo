const age = parseInt(prompt("Please enter your age"));
console.log(age);
let mustPay = false;
if(isNaN(age)){
    alert("Please enter a valid age")
}

if (age <= 12 || age >= 65) {
  // do this if customer is 12 or younger (i.e., if condition is true )
  alert("The customer's ticket is free.");
} else {
  // do this if customer is 13 or older (if.e., if condition is false)
  alert("Please pay the full ticket price.");
  mustPay = true;
}

if (mustPay) {
  const amount = prompt("Please pay $15");
  if (amount == 15) {
    alert("Thank you! Come on in");
  } else {
    alert("Sorry it's exactly 15");
  }
}
