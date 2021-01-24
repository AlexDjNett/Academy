let hour = prompt("How many seconds in hours?", 1);
let day = prompt("How many seconds in day?", 1);
let month = prompt("How many seconds in month?",1);

let hourToSeconds = hour * "3600";
let dayToSeconds = day * "8640";
let monthToSeconds = month * "2592000";

alert(hourToSeconds);
alert(dayToSeconds);
alert(monthToSeconds);