// Task 1
function propsCount(currentObject) {
  let arr = Object.keys(currentObject);
  return console.log(arr.length);
}

let mentor = { 
            course: "JS fundamental", 
            duration: 3,
            course1: "JS fundamental", 
            duration2: 3,
            direction: "web-development" 
        };

propsCount(mentor);

//Task 2
function showProps(currentObject) {
  let keys = Object.keys(currentObject);
  let value = Object.values(currentObject);

  return console.log(value), console.log(keys);
}

let mentor = { 
            course: "JS fundamental", 
            duration: 1,
            course1: "CSS fundamental", 
            duration1: 3,
            direction: "web-development" 
        };

showProps(mentor);

//Task 3
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    return this.name + ' ' + this.surname;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(midleName) {
    this.midleName = midleName;
    return this.name + ' ' + this.surname + ' ' + this.midleName;
  }

  showCourse() {
    let result = 2021 - this.year;
    if (result > 0 || 7 > result) {
      return result;
    } else {
      return "Incorrect curse";
    }
  }
}

let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 5

//Task 4
class Worker {
  #experience = 1.2;

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }

  showSalary() {
    let salary = this.dayRate * this.workingDays;
    let result = this.fullName + ' salary: ' + salary;
    return result;
  }

  showSalaryWithExperience() {
    let SalaryWithExperience = this.dayRate * this.workingDays * this.#experience;
    let result = this.fullName + ' salary: ' + SalaryWithExperience;
    console.log(result);
    return SalaryWithExperience;
  }

  get showExp() {
    return this.#experience;
  }

  set setExp(value) {
    this.#experience = value;
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
let salary1 = worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);                 
worker2.setExp = 1;
let salary2 = worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);                 
worker3.setExp = 1.5;
let salary3 = worker3.showSalaryWithExperience();

let arr = [];
let result = "";

arr.push(salary1, salary2, salary3);
arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == salary1) {
    result += worker1.fullName + ": " + salary1 + "</br>";
  } else if (arr[i] == salary2) {
    result += worker2.fullName + ": " + salary2 + "</br>";
  } else if (arr[i] == salary3) {
    result += worker3.fullName + ": " + salary3 + "</br>";
  } else {}
}

result = `Sorted salary: </br> ${result}`;
console.log(document.write(result));

//Task 5
class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
   return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure{
constructor(a,h) {
super();
this.a = a;
this.h = h;
}
getArea() {
  return 0.5 * this.a * this.h;
}
}

class Square extends GeometricFigure{
constructor(a) {
super();
this.a = a;
}
getArea() {
  return this.a * this.a;
}
}

class Circle  extends GeometricFigure{
constructor(r) {
super();
this.r = r;
}
getArea() {
  return Math.PI * this.r ** 2;
}
}

function handleFigures(figures) {
let result = "";
let allArea = 1;
let areaGeometricFigure = Object.keys(figures).length;

for (key in figures) {
  result += `Geometric figure: ${figures[key].toString()} - area: ${figures[key].getArea()}
  `;
}

for (let i = 0; i < areaGeometricFigure; i++) {
  allArea += figures[i].getArea();
}

result += allArea;
return result;
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));

