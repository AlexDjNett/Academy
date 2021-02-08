//Task 1

function calcRectangleArea(a, b) {
  let aWidth = +a;
  let bHeight = +b;
  let res = aWidth * bHeight;
  
  if (isNaN(res)) {
    throw new Error("It is not a number");
  } 
    return res;
}

try {
  console.log(calcRectangleArea(4, "6hh"));
} catch (exception) {
      console.log(exception.message);
}

//Task 2

function checkAge() {
  let age = +prompt("What is your age?");
  
  if (age == 0) {
    throw new Error("The field is empty! Please enter your age");
  } else if (isNaN(age)) {
    throw new Error("It is not a number");
  } else if (age < 14) {
    throw new Error("The age of the user is less than 14 years");
  } else {
    return true;
  }
}

try {
  let result = checkAge();
  if (result == true) {
  alert("Access is allowed");
  }
} catch(exception) {
  alert(exception.message);
}

//Task 3

class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
  }
}

function showMonthName(month) {
  let months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  };

  if (month > 13) {
    throw new MonthException("Incorrect month number");
  } else {
    return months[month];
  }
}

try {
  console.log(showMonthName(4));
} catch (e) {
  console.log(e.name + ' ' + e.message);
}

//Task 4

function showUser(id) {
  let obj = {};
  let personalId = parseInt(id);

  try {
    if (personalId < 0) {
      throw new Error(`Error: ID must not be negative: ${personalId}`);
    } else {
      obj = { id: personalId };
      return obj;
    }
  } catch(exception) {
      console.log(exception.message);
    }
}

function showUsers(ids) {
  let amountIds = ids.length;
  let userId;
  let result = [];

  for (let i = 0; i < amountIds; i++) {
    userId = showUser(ids[i]);
    result.push(userId);
  }
  return result;
}

console.log(showUsers([7, -12, 44, -22]));

