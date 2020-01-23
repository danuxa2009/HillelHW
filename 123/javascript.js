"use strict"


const phoneBookFormElement = document.querySelector('#phoneBookForm');

const nameElement = document.querySelector('#name');
const surNameElement = document.querySelector('#surname');
const phoneElement = document.querySelector('#phone');

const addButtonElement = document.querySelector('#btnAdd');

const phoneBookElement = document.querySelector('#phoneBook');

const phoneBookItemTemplate = document.querySelector('#phoneBookItemTemplate').innerHTML;


phoneBookFormElement.addEventListener('submit', onPhoneBookFormSubmit);
phoneBookElement.addEventListener('click', onPhoneBookClick);
phoneBookFormElement.addEventListener('blur', onPhoneBookInputValidator, true);

function onPhoneBookInputValidator(e) {
    if (validBlur(e)) {
        e.target.classList.add('NotCorrectValue');
    } else {
        e.target.className = 'inputData';
    }
};

function validBlur(e) {
    return e.target.value.trim() == '' && e.target.classList.contains('inputData')
}

function onPhoneBookClick(e) {
    if (e.target.classList.contains('close-btn')) {
        deletContact(e.target.parentNode);
    };
};

function deletContact (contactItem) {
    contactItem.remove();
};

function onPhoneBookFormSubmit(e) {
    e.preventDefault();

    addPhoneNumber(); 
};

function addPhoneNumber() {
    const name = getName();
    const surname = getSurname();
    const phone = getPhone();

    if (validDataContact(name, surname, phone)) {
        addNewContact(name, surname, phone);
        focus();
        clearNotCorrectValue();
        clear();
    }
};

function validDataContact(name, surname, phone) {
    return name !== '' && surname !== '' && phone !== '';    
}

function getName() {
    return nameElement.value.trim();
};

function getSurname() {
    return surNameElement.value.trim();
};

function getPhone() {
    return phoneElement.value.trim();
};


function addNewContact(name, surname, phone) {
    const tr = document.createElement('tr');
    tr.innerHTML = phoneBookItemTemplate
        .replace('{{name}}', name)
        .replace('{{surname}}', surname)
        .replace('{{phone}}', phone);
    phoneBookElement.append(tr);
};

function clear() {
    nameElement.value = '';
    surNameElement.value = '';
    phoneElement.value = '';
}

function clearNotCorrectValue() {
    nameElement.className = 'inputData';
    surNameElement.className = 'inputData';
    phoneElement.className = 'inputData';
};

function focus() {
    nameElement.focus();
};


