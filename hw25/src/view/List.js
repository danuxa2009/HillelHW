import { viewTemplate, itemTemplate } from "../templates";
import createListFromTamplate from "../utils";
import "./css/normalize.css";
import "./css/skeleton.css";
import "./css/theme.css";
import "./css/styles.css";

export default class ListView {
  constructor(config) {
    this.el = this.createElement();
    this.config = config;

    addEventListener("submit", this.onFormSubmit.bind(this));

    this.list = this.el.querySelector("tbody");
    this.list.addEventListener("click", this.onListClick.bind(this));
    this.inputs = this.el.querySelectorAll("input");
  }

  createElement() {
    return createListFromTamplate(viewTemplate);
  }

  fillForm(item) {
    Array.prototype.forEach.call(this.inputs, input => {
      input.value = item[input.name];
    });
  }

  submitUser() {
    const user = this.getFormData();

    if (user.id) {
      this.updateUser(user);
    } else {
      this.createUser(user);
    }
  }

  createUser() {
    const user = {
      name: nameInput.value,
      surname: surnameInput.value,
      email: emailInput.value,
      id: Date.now()
    };
    return user;
  }

  getFormData() {
    const user = {
      name: nameInput.value,
      surname: surnameInput.value,
      email: emailInput.value,
      id: idInput.value
    };
    return user;
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.config.onSave();
  }

  onListClick(e) {
    switch (true) {
      case e.target.classList.contains("delete-btn"):
        this.config.onDelete(e.target.closest(".user-item").dataset.id);
        break;
      case e.target.classList.contains("edit-btn"):
        this.config.onEdit(e.target.closest(".user-item").dataset.id);
        break;
    }
  }

  render(data) {
    this.list.innerHTML = data.map(this.renderItem).join("\n");
  }

  renderItem(item) {
    return itemTemplate
      .replace("{{id}}", item.id)
      .replace("{{name}}", item.name)
      .replace("{{email}}", item.email)
      .replace("{{surname}}", item.surname);
  }
}
