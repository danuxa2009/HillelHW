import UsersCollection from "../model/Collection";
import { usersUrl } from "../config";
import ListView from "../view/List";

export default class Controller {
  constructor() {
    this.collection = new UsersCollection(usersUrl);
    this.listView = new ListView({
      onDelete: id => {
        this.collection.delete(id).then(() => this.refreshData());
      },
      onEdit: id => {
        const model = this.collection.get(id);
        this.listView.fillForm(model);
      },
      onSave: () => {
        const model = this.listView.getFormData();
        if (model.id == "") {
          this.collection.add(this.listView.createUser()).then(() => this.refreshData());
        } else {
          this.collection.updateUser(model).then(() => this.refreshData());
        }
      }
    });
    this.container = document.getElementById("root");
    this.container.append(this.listView.el);
    this.refreshData();
  }

  refreshData() {
    this.collection.getUsers().then(() => this.renderData());
  }

  renderData() {
    this.listView.render(this.collection.list);
  }
}
