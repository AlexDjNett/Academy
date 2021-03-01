const addButton = myForm.addButton,
      removeButton = myForm.removeButton, 
      deviceSelect = myForm.device;
    // обработчик добавления элемента
function addOption(){
    // получаем текст для элемента
    let text = myForm.textInput.value;
 
    // создаем новый элемента
    let newOption = new Option(text);
  deviceSelect.add(newOption);
  
  //Добавляем елемент в строку информации
  const selection = document.getElementById("elem");
   let selectedOption = deviceSelect.options[deviceSelect.selectedIndex];
    selection.textContent = "Вы выбрали: " + selectedOption.text;
}

// обработчик удаления элемент
function removeOption(){
     
  let selectedIndex = deviceSelect.options.selectedIndex;
    // удаляем элемент 
  deviceSelect.remove(selectedIndex);
  
  const selection = document.getElementById("elem");
  console.log(selection);
  
}
 
addButton.addEventListener("click", addOption);
removeButton.addEventListener("click", removeOption);


////Изменяем елемент в строке информации
const devicesSelect = myForm.device;

function changeOption(){
     
  const selection = document.getElementById("elem");
  
    let selectedOption = devicesSelect.options[devicesSelect.selectedIndex];
    selection.textContent = "Вы выбрали: " + selectedOption.text;
}
 
devicesSelect.addEventListener("change", changeOption);
