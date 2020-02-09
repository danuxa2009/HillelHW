"use strict";


const USERS_URL = 'http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users';
const DELETE_BTN_CLASS = 'delete-btn';

let users = []
const contactList = document.querySelector('#contactList')
const contactTemplate = document.querySelector('#contactTemplate').innerHTML;
const contactForm = document.querySelector('#contactForm')

contactForm.addEventListener('submit', onAddUserSubmit)
contactList.addEventListener('click', onContactListClick);

init();

function onAddUserSubmit(event) {
  event.preventDefault();

  submitFormContact()
}

function onContactListClick(e) {
  switch (true) {
    case e.target.classList.contains(DELETE_BTN_CLASS):
      deleteContact(e.target.parentNode.dataset.id)
      break;
  }
}

function init() {
  getUsers();

}

function getUsers() {
  fetch(USERS_URL)
    .then(response => response.json())
    .then(setUsers)
    .then(renderUsers);
}

function renderUsers(data) {
  contactList.innerHTML = data.map(genereteContactHtml).join('\n')
}

function genereteContactHtml(user) {
  return contactTemplate
    .replace('{{name}}', user.name)
    .replace('{{surname}}', user.surname)
    .replace('{{email}}', user.email)
    .replace('{{id}}', user.id)
}

function setUsers(data) {
  return users = data;
}


function deleteContact(id) {
  fetch(`${USERS_URL}/${id}`, {
    method: 'DELETE'
  });

  users = users.filter((user) => user.id !== id)
  renderUsers(users)
}

function submitFormContact() {
  const user = {
    name: userName.value,
    surname: userSurname.value,
    email: userEmail.value
  };
  fetch(USERS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(addUsers)

}

function addUsers(user) {
  users.push(user);
  renderUsers(users);
}