let tagH1 = document.body.firstElementChild;
tagH1.style.backgroundColor = "#adff2f";

let tagDiv = document.getElementById("myDiv").children;

for (let i = 0; i < tagDiv.length; i++) {
    tagDiv[i++].style.fontWeight = "bold";
    tagDiv[i++].style.color = "red";
    tagDiv[i++].style.textDecoration = "underline";
    tagDiv[i++].style.fontStyle = "Italic"; 
}

let tagUl = document.querySelector("ul");
let tagLi = document.querySelectorAll("li");
let addEl = document.createElement('div');
let tagSpan = document.body.lastElementChild.previousElementSibling.previousElementSibling;

let cildTag = tagUl.children;
let text = [];
let res = [];

for (let i = 0; i < cildTag.length; i++) {
    text[i] = cildTag[i].innerHTML;
}

for (i = 0; i < text.length; i++) {
  res += text[i];
}

addEl.innerHTML = res;
while (tagUl.firstChild) {
  tagUl.removeChild(tagUl.firstChild);
}

tagUl.appendChild(addEl);
tagSpan.style.visibility = 'hidden';