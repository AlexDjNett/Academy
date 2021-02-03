let now = new Date();
let hours = now.getHours();

// 1-й вариант решения 

if (hours >= 23 && hours < 5) {
  document.write("Good night!");
} else if (hours >= 5 && hours < 11) {
  document.write("Good morning");
} else if (hours >= 11 && hours < 17) {
  document.write("Good day!");
} else if (hours >= 17 && hours < 23) {
  document.write("Good evening");
} else {
  document.write("Error");
}

// 2-й вариант

(hours >= 23 && hours < 5) ? document.write("Good night!") :
(hours >= 5 && hours < 11) ? document.write("Good morning") :
(hours >= 11 && hours < 17) ? document.write("Good day!") :
(hours >= 17 && hours < 23) ? document.write("Good evening") :
document.write("Error");