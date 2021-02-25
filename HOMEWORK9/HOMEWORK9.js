// Task 1
$("a[href^='https://'").attr('target', '_blank');

// Task 2

let $getHead = $("h2.head");
let $getInner = $getHead.children(".inner");

$getHead.css("background-color", "red");
$getInner.css("font-size", "36px");

// Task 3

$(document).ready(function() {        
  content1 = $('h3').html();
  content2 = $('div').html();
  $('h3').html(content2).show();
  $('div').html(content1).show();
});

// Task 4

$("input[type=checkbox]").click( function() {
      const kol = $('input:checkbox:checked').length;
          if(kol < 3){
    $(':checkbox').prop("disabled", false);  
      }
      if(kol == 3){ 
    $(':checkbox').prop("disabled", true);
    $(':checkbox:checked').prop("disabled", false);
      }
  });


