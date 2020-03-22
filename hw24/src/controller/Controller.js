import Collection from "../model/Collection";
import List from "../view/List";
import Form from "../view/Form";

export default class Controller {
  constructor() {
    this.listView = new List();
    this.container = document.getElementById("root");

    this.todosCollection = new Collection();
    this.todosCollection.getTodos().then(() => this.listView.render(this.todosCollection.list));

    this.container.append(this.listView.el);

    this.formView = new Form();
    this.container.append(this.formView.el);
  }
}
