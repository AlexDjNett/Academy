let a = document.querySelectorAll("div p");
let res = "";

for (let i = 0; i < a.length; i++) {
  let content = a[i].innerText;
  res += `Selector text ${i}: ${content}\u000A`; // Text DIV Text SCRIPT 
}

console.log(res);