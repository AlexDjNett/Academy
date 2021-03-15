    //Получение элементов
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
  selection.textContent = "Вы выбрали элемент: " + selectedOption.text;

  //добавляем панель управления к каждому элементу
  const div = document.createElement("div");
  div.setAttribute("class", "smart_modul");
  div.setAttribute("id", selectedOption.text);
  div.innerHTML += `
        <label class="switch">
          <input type="checkbox" class="check_box" onchange="changeState()"/>
          <span class="slider round"></span>
        </label>
        <div class="text">
          <div class="title">
            <p>${text}</p>
          </div>
          <div class="discriptions">
            <p id="elemValue"></p>
          </div>
        </div>
      
    `;
  document.getElementsByClassName('wrapper_smart_modules')[0].appendChild(div);
}
  //Изменение состояния элемента(вкл, выкл)
  function changeState() {

    let content = document.getElementsByClassName("check_box");
    let smartMod = document.getElementsByClassName("smart_modul");
    
    for (let i = 0; i < smartMod.length; i++) {
	if (content[i].checked) {
		smartMod[i].setAttribute('style', "background-color: green");
	}
	else {
    smartMod[i].setAttribute('style', "background-color: red");
  }
  }
}

  // обработчик удаления элемент
function removeOption(){
     //Выбранный элемент
  let selectedIndex = deviceSelect.options.selectedIndex;
  // удаляем элемент 
  deviceSelect.remove(selectedIndex);
  const selection = document.getElementById("elem");
  // Удаляем элемент в строке информации
  selection.innerHTML = ""; 
}

// Удаляем блок элемента который выбрали
function removeDiv() {

  const select = document.getElementById("device");
  let value = select.value;
  let removeDiv = document.getElementById(value);
  console.log(value);
  
}

addButton.addEventListener("click", addOption);
removeButton.addEventListener("click", removeOption);
removeButton.addEventListener("click", removeDiv);

//Изменяем елемент в строке информации
const devicesSelect = myForm.device;

function changeOption() {
     
  const selection = document.getElementById("elem");
  
    let selectedOption = devicesSelect.options[devicesSelect.selectedIndex];
    selection.textContent = "Вы выбрали элемент: " + selectedOption.text;
}
 
devicesSelect.addEventListener("change", changeOption);


