//Task 1

function upperCase (str) {
  let regexp = /[A-Z]/;
  if (regexp.test(str[0])) {
    console.log("String's starts with uppercase character");
  } else {
    console.log("String's not starts with uppercase character");
  }
}

upperCase('RegExp');

//Task 2

function checkEmail (str) {
  let regexp = /^[a-z0-9][a-z0-9\.]*[a-z0-9]*@([a-z0-9]+([a-z0-9]*[a-z0-9]+)*\.)+[a-z]+/i;
  let res = regexp.test(str);
  console.log(res);
}

checkEmail('Qmai545l2@gmail.com');

//Task 3

function regExp (str) {
  let regexp = /db+d/i;
  let regexp1 = /b+/ig;
  let regexp2 = /d$/ig;
  let res = regexp.exec(str);
  let res1 = regexp1.exec(res);
  let res2 = regexp2.exec(res);
  console.log([res[0],res1[0],res2[0]]);
}

regExp('cdbBdbsbz');

// Task 4

let re = /(\w+)\s(\w+)/;
let str = "Java Script";
let newstr = str.replace(re, '$2, $1');
console.log(newstr);

//Task 5

function isCard (str) {
  let regexp = /^[0-9]{4}[-]{1}[0-9]{4}[-]{1}[0-9]{4}[-]{1}[0-9]{4}$/;
  let res = regexp.test(str);
  console.log(res);
}

isCard("9944-9999-9999-9999");

//Task 6

function checkEmail (mail) {
  let regexp = /^[a-z0-9][-]?[a-z0-9\._]*[-]?[a-z0-9]*[-]{0}@([a-z0-9]+[-]?([a-z0-9]*[a-z0-9]+)*\.)+[a-z]+/i;
  if (regexp.test(mail)) {
    console.log("Email is correct!");
  } else {
    console.log("Email is not correct!");
  }
}

checkEmail("mmail@gmail.com");
checkEmail("#my_mail@gmail.com");

//Task 7

function checkLogin (login) {
  let regexp = /^\D{1}[a-z0-9/.]{2,10}/g;
  let regexp1 = /([0-9]+[\.]?)+/g;

  let checkLog = login.match(regexp);
  let Num = login.match(regexp1);
  let len = String(login).length;

    if (login == checkLog  && len < 11) {
      console.log(true);
      console.log(Num);
    } else {
      console.log(false);
      console.log(Num);  
    }
  }

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');