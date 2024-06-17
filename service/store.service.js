const { Store } = require("../model");

let registerStore = (body) => {
  return Store.create(body);
};

let getStore = (id) => {
  return Store.findById(id);
};

let deleteStore = (id) => {
  return Store.findByIdAndDelete(id);
}

let updateStore = (id, body) => {
  return Store.findByIdAndUpdate(id, body, { new: true });
}

module.exports = { registerStore, getStore, deleteStore, updateStore };
