let urlWeakMap = new WeakMap();

export default class UserModel {
  get url() {
    return urlWeakMap.get(this);
  }

  set url(val) {
    urlWeakMap.set(this, val);
  }

  constructor(collectionUrl, data) {
    this.url = collectionUrl;
    this.setData(data);
  }

  setData(data) {
    Object.assign(this, data);
  }

  delete() {
    return fetch(`${this.url}/${this.id}`, {
      method: "DELETE"
    });
  }
}
