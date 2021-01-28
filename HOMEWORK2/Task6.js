let sideA = prompt("Enter side A of triangle", 1);
if (!isNaN(sideA)) {
  sideA = Number(sideA);
} else {
  document.write(`Side A, Incorrect data <br>`);
}

let sideB = prompt("Enter side B of triangle", 1);
if (!isNaN(sideB)) {
  sideB = Number(sideB);
} else {
  document.write(`Side B, Incorrect data <br>`);
}

let sideC = prompt("Enter side C of triangle", 1);
if (!isNaN(sideC)) {
  sideC = Number(sideC);
} else {
  document.write("Side C, Incorrect data");
}
let semiPerimeter = (sideA + sideB + sideC) * 0.5;
let square = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));
console.log(square.toFixed(3));



