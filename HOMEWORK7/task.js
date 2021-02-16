
let cities = {
  ger: ["Berlin", "Gamburg", "Essen", "Bremen"],
  usa: ["NewYork", "Boston", "Chikago", "Washington"],
  ukr: ["Dnipro", "Lviv", "Rivne", "Kharkiv"] 
};

const EL1 = document.getElementById("country");
const EL2 = document.getElementById("city");
const elemP = document.getElementsByTagName("p");

window.onload = selectCities;
EL1.onchange = selectCities;

function selectCities(){
  EL2.innerHTML = "";
  let firsValue = this.value || "ger", res;
  
  for (let i = 0; i < cities[firsValue].length; i++){
  res = new Option(cities[firsValue][i],i,false,false);
  EL2.add(res);
  };

let index = city.selectedIndex;
let date = city.options[index].text;
elemP[1].innerText = date;
}

let index = country.selectedIndex;
let date = country.options[index].text;
elemP[0].innerText = date;

document.addEventListener('DOMContentLoaded', () => {
  EL1.addEventListener("change", e => {
    let index = EL1.selectedIndex;
    let date = EL1.options[index].text;
    elemP[0].innerText = date;
  });

  EL2.addEventListener("change", e => {
    let index = EL2.selectedIndex;
    let date = EL2.options[index].text;
    elemP[1].innerText = date;
  });
});