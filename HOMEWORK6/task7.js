let elemBody = document.body.firstElementChild;
elemBody.insertAdjacentHTML('beforebegin', '<main></main>');

let elemMain = document.body.firstElementChild;
elemMain.setAttribute('class', 'mainClass check item')

elemMain.insertAdjacentHTML('afterbegin', '<div></div>');
let div = document.getElementsByTagName("div");
div[0].setAttribute('id', 'myDiv')
let elemP = document.getElementById("myDiv");

elemP.insertAdjacentHTML('afterbegin', '<p>First paragraph</p>')
