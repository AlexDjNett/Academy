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

var cities = {
  ger: ["Berlin", "Gamburg", "Essen", "Bremen"],
  usa: ["NewYork", "Boston", "Chikago", "Washington"],
  ukr: ["Dnipro", "Lviv", "Rivne", "Kharkiv"] 
};
var country = document.getElementById("country");
var city = document.querySelector("#city");

window.onload = selectCountry;
country.onchange = selectCountry;

function selectCountry(){
  city.innerHTML = "";
  let c = this.value || "ger", o;
  for(let i = 0; i < cities[c].length; i++){
    o = new Option(cities[c][i],i,false,false);
    city.add(o);
  };

}
document.addEventListener('DOMContentLoaded', () => {
  const EL1 = document.getElementById("country");
  const EL2 = document.getElementById("city");
  if (!!EL1) {
      EL1.addEventListener("change", e => {
        let index = document.getElementById("country").selectedIndex;
        let date = document.getElementById("country").options[index].text;
        let elemP = document.getElementsByTagName("p");
        let a = elemP[0].innerHTML = date;
      });
  }
  if (!!EL2) {
          EL2.addEventListener("change", e => {
            let index = document.getElementById("city").selectedIndex;
            let date = document.getElementById("city").options[index].text;
            let elemP = document.getElementsByTagName("p");
            let a = elemP[0].innerHTML = date;
          });
      }
});
