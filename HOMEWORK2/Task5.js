let isAdult = prompt("You are 18 years old?", 1);

let eighteenPlus = "You have reached the age of majority";
let eighteenMinus = "You haven't reached the age of majority";

let message = (18 <= isAdult) ? eighteenPlus : eighteenMinus;

document.write(message);

