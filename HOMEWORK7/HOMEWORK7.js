//Task 1

let newWin = window.open("about:blank", "hello", "width=300,height=300");
setTimeout(() => newWin.resizeTo(500,500), 2000);
setTimeout(() => newWin.moveTo(200,200), 4000);
setTimeout(() => newWin.close(), 6000);

//Task 2

function changeCSS() {
  let content = document.getElementById("text");
  content.setAttribute('style', "color: orange; font-size: 20px; font-family: Comic Sans MS");
}
let btn = document.getElementById("btn");
btn.addEventListener( "click" , () => changeCSS());

//Task 3

function btnBlue() {
  let content = document.body;
  content.setAttribute('style', "background-color: blue");
}

let btnB = document.getElementById("blue");
btnB.addEventListener( "click" , () => btnBlue());

function btnPink() {
  let content = document.body;
  content.setAttribute('style', "background-color: pink");
}

let btnP = document.getElementById("pink");
btnP.addEventListener( "dblclick" , () => btnPink());

function btnBrown() {
  let content = document.body;
  content.setAttribute('style', "background-color: brown");
}

function btnWhite() {
  let content = document.body;
  content.setAttribute('style', "background-color: white");
}

let btnBr = document.getElementById("brown-white");
btnBr.addEventListener( "mousedown" , () => btnBrown());
btnBr.addEventListener( "mouseup" , () => btnWhite());

let elemA = document.getElementById("yellow");

elemA.addEventListener("mouseover", function () {
   document.body.style.backgroundColor="yellow"; 
});
elemA.addEventListener("mouseout", function () {
   document.body.style.backgroundColor="white"; 
});

//Task 4

let removeButton = document.getElementById("btn");
let languagesSelect = document.getElementById("person");
function removeOption(){  
  let selectedIndex = languagesSelect.options.selectedIndex;
  languagesSelect.options[selectedIndex] = null;
}

removeButton.addEventListener("click", removeOption);

//Task 5

let elemBtn = document.getElementById("btn");

elemBtn.addEventListener("mouseover", function () {
  elemBtn.insertAdjacentHTML("afterend", "<div>Mouse on me!</div>");
});
elemBtn.addEventListener("mouseout", function () {
  elemBtn.insertAdjacentHTML("afterend", "<div>Mouse is not me!</div>");
});
elemBtn.addEventListener("click", function () {
  elemBtn.insertAdjacentHTML("afterend", "<div>I was pressed!</div>");
});

//Task 6

document.body.innerHTML = `<div>Ширина экрана: ${innerWidth}, Высота экрана: ${innerHeight}</div>`;

window.addEventListener("resize", function() {
  document.body.innerHTML = `<div>Ширина экрана: ${innerWidth}, Высота экрана: ${innerHeight}</div>`;
}, false);

//Task 7


let cities = {
  ger: ["Berlin", "Gamburg", "Essen", "Bremen"],
  usa: ["NewYork", "Boston", "Chikago", "Washington"],
  ukr: ["Dnipro", "Lviv", "Rivne", "Kharkiv"] 
};

const EL1 = document.getElementById("country");
EL1.addEventListener('change', selectCities);
EL1.addEventListener('change', Paragraph);

const EL2 = document.getElementById("city");
EL2.addEventListener("change", Paragraph);

window.onload = selectCities;
EL1.onchange = selectCities;

function selectCities(){
  EL2.innerHTML = "";
  let firsValue = this.value || "ger", res;
  let select_country = EL1.value;
  
  for (let i = 0; i < cities[firsValue].length; i++){
    let new_opinion = document.createElement('option');
    new_opinion.innerHTML = cities[select_country][i];
    EL2.appendChild(new_opinion);
  };
}

let parag = document.querySelector("p");

function toParagraf () {
  parag.innerHTML = ""; 
  parag.innerHTML = EL1.options[EL1.selectedIndex].text + ',' + 
  EL2.options[EL2.selectedIndex].text;
}