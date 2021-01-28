let x = prompt("This number is divisible by positive two or seven?");

if (x % 7 == false) {
  console.log("Your number divide seven");
} else if (x > 0 && x % 2 == false) {
  console.log("Your number divide positive two");
} else {
  console.log("Your number is not divisible by positive two and seven");
}