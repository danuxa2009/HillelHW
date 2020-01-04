"use strict"
const arrayOfElement = [];
const enteredNumber = document.getElementById('result').addEventListener('click', onResultBtnClick);
const enteredNumberOfElements = +document.getElementById('numberOfElements').value;

function onResultBtnClick() {
    onClickDelete();
    list.append(...onClickCreate());

}


function onClickCreate() {
    const enteredNumberOfElements = +document.getElementById('numberOfElements').value;
    for (let i = 1; i <= enteredNumberOfElements; i++) {
        const CreateListElem = document.createElement('li');
        CreateListElem.append(i);
        arrayOfElement.push(CreateListElem);
    }

    return arrayOfElement;
}

function onClickDelete() {
    arrayOfElement.length = 0;
    list.innerHTML = "";
}