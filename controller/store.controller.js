const { storeService } = require("../service");

let registerStore = async (req, res) => {
  try {
    let body = req.body;
    let store = await storeService.registerStore(body);
    res.status(201).json({
      message: "Store registered successfully",
      store,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

let getStore = async (req, res) => {
  try {
    let store = await storeService.getStore(req.params.id);
    res.status(200).json({
      message: "Store retrieved successfully",
      store,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

let deleteStore = async (req, res) => {
  try {
    let store = await storeService.deleteStore(req.params.id);
    res.status(200).json({
      message: "Store deleted successfully",
      store,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

let updateStore = async (req, res) => {
  try {
    let body = req.body;
    let store = await storeService.updateStore(req.params.id, body);
    res.status(200).json({
      message: "Store updated successfully",
      store,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { registerStore, getStore, deleteStore, updateStore };
