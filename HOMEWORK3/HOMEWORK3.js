// Task 1

// For

let a = [2, 3, 4, 5];
let sum = 1;

for (let i = 0; i < a.length; i++) {
  sum = sum * a[i];
}

console.log(sum);

// While

let sumWhile = 1;
let i = 0;
while (i < a.length) {
  sumWhile = sumWhile * a[i];
  i++;
}

console.log(sumWhile);

// Task 2

let start = 0;
let end = 15;

for (start; start <= end; start++) {
    if (start % 2 == 0) { 
    document.write(`${start} is even<br>`);
  } else if (start % 2 !== 0) {
    document.write(`${start} is odd<br>`);
  }
}

// Task 3

function randArray(limit) {
  let arr = [];

  for (let i = 0; i < limit; i++) {
    let randNumber = Math.floor(Math.random() * Math.floor(501));
    arr.push(randNumber);
  }
  console.log((arr));
}

randArray(5); 

// Task 4

function raiseToDegree() {
  let a = prompt("Enter number");
  let b = prompt("Enter number");
  a = Number(a);
  b = Number(b);
  let result;

  if (Number.isInteger(a) && Number.isInteger(b)) {
    result = a ** b;
    document.write(result);
  }
}

raiseToDegree(3, 4);  // 81

// Task 5

function findMin() {
  let len = arguments.length;
  let min = Infinity;
  while (len--) {
    if (arguments[len] < min) {
      min = arguments[len];
    }
  }
  console.log(min);
}

findMin(12, 14, 4, -4, 0.2); // => -4

// Task 6

function findUnique(arr) {
  let sorted_arr = arr.slice().sort(); 
  let results = [];

  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  if (results == false) {
    console.log(true)
  } else {
    console.log(false);
  }
}

findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true


// Task 7

function lastElem(arr, n) {
  let result = [];

  if (n == undefined) {
    n = 1;
  }
  
  result = arr.slice(-n);
  console.log(result);
}

console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]

// Task 8

function upperCase(str) {
  let result = [];
  let arr = str.split(" ");

  for (let i in arr) {
    result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ";
  } 
  console.log(result);
}

upperCase("I Love java script");  