"use strict";

const CONTACTS_URL = "http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts";

const $contactTemplate = $("#contactTemplate").html();
const contactsList = $("#contactList");
const formInputs = $(".form-input");

let dialog;
let contacts = [];

$("#addContactBtn").on("click", () => dialog.dialog("open"));
$("#newContactForm").on("click", ".delete-btn", onDeleteBtnClick);
$("#newContactForm").on("click", ".edit-btn", onEditBtnClick);

init();

function init() {
  initDatePicker();
  initDialog();
  getContacts();
}

function getContacts() {
  fetch(CONTACTS_URL)
    .then(response => response.json())
    .then(setContacts)
    .then(renderContacts);
}

function setContacts(data) {
  return (contacts = data);
}

function renderContacts(data) {
  contactsList.html(data.map(genereteContactHtml).join("\n"));
}

function genereteContactHtml(contact) {
  return $contactTemplate
    .replace("{{name}}", contact.name)
    .replace("{{surname}}", contact.surname)
    .replace("{{phone}}", contact.phone)
    .replace("{{email}}", contact.email)
    .replace("{{date}}", contact.date)
    .replace("{{id}}", contact.id);
}

function initDialog() {
  dialog = $("#dialog-form").dialog({
    autoOpen: false,
    height: 420,
    width: 300,
    modal: true,
    buttons: {
      Create: function() {
        submitContact(), dialog.dialog("close");
      },

      Cancel: function() {
        dialog.dialog("close");
      }
    },
    close: function() {
      resetContactForm();
    }
  });
  resetContactForm();
}

function onDeleteBtnClick() {
  const $contact = $(this).closest(".contact");
  const contactId = $contact.attr("data-id");
  deleteContact(contactId);
}

function onEditBtnClick() {
  const $contact = $(this).closest(".contact");
  const contactId = $contact.attr("data-id");
  dialog.dialog("open").dialog({
    buttons: {
      Save: function() {
        submitContact(), dialog.dialog("close");
      },
      Cancel: function() {
        dialog.dialog("close");
      }
    },
    close: function() {
      dialog.dialog("close").dialog({
        buttons: {
          Create: function() {
            submitContact(), dialog.dialog("close");
          },

          Cancel: function() {
            dialog.dialog("close");
          }
        }
      });
    }
  });
  editContact(contactId);
}

function deleteContact(id) {
  fetch(`${CONTACTS_URL}/${id}`, {
    method: "DELETE"
  });

  contacts = contacts.filter(contact => contact.id !== id);
  renderContacts(contacts);
}

function editContact(id) {
  const contact = contacts.find(item => item.id === id);

  fillFrom(contact);
}

function fillFrom(contact) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].value = contact[formInputs[i].name];
  }
}

function getFormData() {
  const obj = {};

  for (let i = 0; i < formInputs.length; i++) {
    obj[formInputs[i].name] = formInputs[i].value;
  }

  return obj;
}

function submitContact() {
  const contact = getFormData();
  if (contact.id) {
    updateContact(contact);
  } else {
    createContact(contact);
  };
  resetContactForm();
}

function updateContact(contact) {
  fetch(`${CONTACTS_URL}/${contact.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contact)
  });

  contacts = contacts.map(item => (item.id == contact.id ? contact : item));

  renderContacts(contacts);
}

function createContact() {
  const contact = {
    id: Date.now(),
    name: $("#nameInput").val(),
    surname: $("#surnameInput").val(),
    phone: $("#phoneInput").val(),
    email: $("#emailInput").val(),
    date: $("datepicker").val()
  };
  fetch(CONTACTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contact)
  })
    .then(response => response.json())
    .then(addContact);
}

function addContact(contact) {
  contacts.push(contact);
  renderContacts(contacts);
}

function resetContactForm() {
  formInputs.val("");
}

function initDatePicker() {
  $("#datepicker").datepicker();
}
