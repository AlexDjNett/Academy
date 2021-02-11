// Way1
let elemLen = document.querySelector("ul");
let a = elemLen.children;

// // let elemFirst = a[0].innerHTML;
// // let elemSecond = a[1].innerHTML;
// // let elemThird = a[2].innerHTML;
// // let elemFourth = a[3].innerHTML;
// // let elemFifrh = a[4].innerHTML;
// alert(elemFifrh); alert(elemSecond);
// alert(elemThird); alert(elemFourth);
// alert(elemFirst);

//Way2
elemFirst = elemLen.firstElementChild.innerText;
elemSecond = elemLen.firstElementChild.nextElementSibling.innerText;
elemSecond = elemLen.firstElementChild.nextElementSibling.nextElementSibling.innerText;
elemFourth = elemLen.lastElementChild.previousElementSibling.innerText;
elemFifrh = elemLen.lastElementChild.innerText;

alert(elemFifrh); alert(elemSecond);
alert(elemThird); alert(elemFourth);
alert(elemFirst);