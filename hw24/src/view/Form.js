import "./form.css";

export default class Form {
  constructor() {
    this.el = document.createElement("div");
    this.el.classList.add("style-form");
    this.el.innerHTML = this.createForm();
  }

  createForm() {
    return `<form><input type="text">` + `<button>Add</button></form>`;
  }
}
