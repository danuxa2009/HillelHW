import UserModel from "./Model";

export default class UsersCollection {
  constructor(url) {
    this.url = url;
    this.list = [];
    this.setData = this.setData.bind(this);
  }
  get(id) {
    return this.list.find(item => item.id == id);
  }

  getUsers() {
    return fetch(this.url)
      .then(response => response.json())
      .then(this.setData);
  }

  setData(list) {
    return (this.list = list.map(el => new UserModel(this.url, el)));
  }

  delete(id) {
    const model = this.get(id);
    return model.delete().then(() => this.list.filter(user => user !== model));
  }

  add(data) {
    return fetch(`${this.url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => this.list.push(new UserModel(this.url, data)));
  }
  updateUser(user) {
    return fetch(`${this.url}/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
  }
}
