"use strict";

const addNewContactForm = document.getElementById("addNewContactForm");
const contactList = document.getElementById("contactList");
const rowContactTemplate = document.getElementById("contactTemplate").innerHTML;

// document.getElementById("contactTemplate").addEventListener('click', onDeleteButtonClick, true);
document.getElementById("actionAdd").addEventListener("click", onAddContactFormSubmit);

function onAddContactFormSubmit(event) {
  event.preventDefault();

  submitForm();
  // resetForm();
}

function submitForm() {
  const row = {
    nameContact: nameContact.value,
    surnameContact: surname.value,
    phoneNumberContact: phoneNumber.value
  };

  addRowContact(row);
}

function addRowContact(row) {
  const html = rowContactTemplate;
  html.classList = 'contactRow'
    .replace("{{nameContact}}", row.nameContact)
    .replace("{{surname}}", row.surnameContact)
    .replace("{{phoneNumber}}", row.phoneNumberContact);
  const newContactElement = htmlToElement(html);
  contactList.append(newContactElement);
}

function htmlToElement(html) {
  const template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  return template.content;
}

function onDeleteButtonClick(event) {
  if (event.target.classList.contains('deleteBtn')) {
    removeContact
  }
}

function onContactsListClick(event) {
  if (event.target.classList.contains('delete-btn')) {
    removeContact(event.target.closest('.contact-row'));
  }
}
1