let value1 = prompt("Enter value1");
let value2 = prompt("Enter value2");

let inp1 = document.body.firstElementChild;
let inp2 = inp1.nextElementSibling;

let clas1 = inp1.setAttribute("value", value1);
let class2 = inp2.setAttribute("value", value2);

inp1.classList.remove("value");
inp1.setAttribute("value", value2);

inp2.classList.remove("value");
inp2.setAttribute("value", value1);
