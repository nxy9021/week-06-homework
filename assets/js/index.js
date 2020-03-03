// plus
const addA = document.querySelector("#add-a");

const addB = document.querySelector("#add-b");

const addButton = document.querySelector("#add-solve");

const addResultDisplay = document.querySelector("#add-result");

function add(){
    addResultDisplay.value = 
    parseInt(addA.value,10) + parseInt(addB.value,10);
}

addButton.addEventListener("click", add);

// subtract

const subtractA = document.querySelector("#subtract-a");

const subtractB = document.querySelector("#subtract-b");

const subtractButton = document.querySelector("#subtract-solve");

const subtractResultDisplay = document.querySelector("#subtract-result");

function subtract(){
    subtractResultDisplay.value = 
    parseInt(subtractA.value,10) - parseInt(subtractB.value,10);
}

subtractButton.addEventListener("click", subtract);

// multiply

const multiplyA = document.querySelector("#multiply-a");

const multiplyB = document.querySelector("#multiply-b");

const multiplyButton = document.querySelector("#multiply-solve");

const multiplyResultDisplay = document.querySelector("#multiply-result");

function multiply(){
    multiplyResultDisplay.value = 
    parseInt(multiplyA.value,10) * parseInt(multiplyB.value,10);
}

multiplyButton.addEventListener("click", multiply);

// divide

const divideA = document.querySelector("#divide-a");

const divideB = document.querySelector("#divide-b");

const divideButton = document.querySelector("#divide-solve");

const divideResultDisplay = document.querySelector("#divide-result");

function divide(){
    divideResultDisplay.value = 
    parseInt(divideA.value,10) / parseInt(divideB.value,10);
}

divideButton.addEventListener("click", divide);