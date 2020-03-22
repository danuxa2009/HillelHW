import "./list.css";

export default class List {
  constructor() {
    this.el = document.createElement("div");
    this.el.classList.add("style-list");
  }

  render(list) {
    this.el.innerHTML = list.map(this.createTemplate).join("\n");
  }

  createTemplate(item) {
    function isDone(item) {
      if (item == true) {
        return "done";
      } else {
        return "";
      }
    }
    const state = isDone(item.completed);
    return `<div class='${state}'>${item.title}</div>`;
  }
}
