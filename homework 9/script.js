"use strict";


const phoneBookFormEl = document.querySelector('#phoneBookForm');
const nameEl = document.querySelector('#name');
const surnameEl = document.querySelector('#surname');
const phoneEl = document.querySelector('#phone');
const phoneBookEl = document.querySelector('#phoneBook')
const phoneBookItemTemplate = document.querySelector('#phoneBookItemTemplate').innerHTML;

phoneBookFormEl.addEventListener('submit', onPhoneBookFormSubmit);
phoneBookEl.addEventListener('click', onPhoneBookClick)
phoneBookFormEl.addEventListener('blur', onPhoneBookInputValidator, true);
document.querySelector('#btnAdd')


function onPhoneBookInputValidator(e) {
  if (validBlur(e)) {
    e.target.classList.add('NotCorrectValue');
  } else {
    e.target.className = 'inputData'
  }
};

function validBlur(e) {
  return e.target.value.trim() == '' && e.target.classList.contains('inputData')
}

function onPhoneBookClick(e) {
  if (e.target.classList.contains('close-btn')) {
    deleteContact(e.target.parentNode);
  }
}

function deleteContact(contactItem) {
  contactItem.remove();
}

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
}

function validDataContact(name, surname, phone) {
  return name !== '' && surname !== '' && phone !== '';
}

function getName() {
  return nameEl.value.trim();
}

function getSurname() {
  return surnameEl.value.trim();
}

function getPhone() {
  return phoneEl.value.trim();
}

function addNewContact(name, surname, phone) {
  const newRow = document.createElement('tr');
  newRow.innerHTML = phoneBookItemTemplate
    .replace('{{name}}', name)
    .replace('{{surname}}', surname)
    .replace('{{phone}}', phone);
  phoneBookEl.append(newRow);
}

function clearNotCorrectValue() {
  nameEl.className = 'inputData';
  surnameEl.className = 'inputData';
  phoneEl.className = 'inputData';
}

function clear() {
  nameEl.value = '';
  surnameEl.value = '';
  phoneEl.value = '';
}

function focus() {
  nameEl.focus();
}