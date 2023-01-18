let inputArray = [];
let list = document.getElementById("myList");
let inputArray2 = [];
let theme = document.getElementById("themeList");

function addToArray() {
    while(list.firstChild)
    list.removeChild(list.firstChild)
    let inputValue = document.getElementById("inputValue").value;
    inputArray.push(inputValue);
    console.log(inputArray);
    updateList();
}



function deleteFromArray() {
  let inputValue = document.getElementById("inputValue").value;
  let index = inputArray.indexOf(inputValue);
  if (index !== -1) {
    inputArray.splice(index, 1);
    console.log(inputArray);
    updateList();
  }
}

function clearArray() {
  inputArray.length = 0;
  console.log(inputArray);
  updateList();
}

function updateList() {
    list.innerHTML = "";
    inputArray.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });
}

function addToArray2() {
    while(theme.firstChild)
    theme.removeChild(theme.firstChild)
  let inputValue2 = document.getElementById("inputValue2").value;
  inputArray2.push(inputValue2);
  console.log(inputArray2);
  updateList2();
}

function deleteFromArray2() {
    let inputValue2 = document.getElementById("inputValue2").value;
    let index = inputArray2.indexOf(inputValue2);
    if (index !== -1) {
      inputArray2.splice(index, 1);
      console.log(inputArray2);
      updateList2();
    }
  }

function clearArray2() {
    inputArray2.length = 0;
    console.log(inputArray2);
    updateList2();
  }

function updateList2() {
    theme.innerHTML = "";
    inputArray2.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        theme.appendChild(li);
    });
}

function getRandomName() {
    let randomName = Math.floor(Math.random() * inputArray2.length);
    let randomItem = inputArray2[randomName];
    console.log(randomItem)
    let name2Output = document.getElementById("name2Output");
    name2Output.textContent = randomItem;
    updateList();

}

function getRandomName2() {
    let randomName1 = Math.floor(Math.random() * inputArray2.length);
    let randomItem = inputArray2[randomName1];
    console.log(randomItem)
    let outputH1 = document.getElementById("outputH1");
    outputH1.textContent = randomItem;
    updateList();
}

function getRandomTheme() {
    let randomTheme = Math.floor(Math.random() * inputArray.length);
    let randomItem1 = inputArray[randomTheme];
    console.log(randomItem1)
    let themeOutput = document.getElementById("themeOutput");
    themeOutput.textContent = randomItem1;
    updateList();
}
