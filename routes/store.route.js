let express = require("express");
let route = express.Router();
let { storeController } = require("../controller");
let validate = require("../middleware/validate");
let { storeValidation } = require("../validations");

route.post("/register", validate(storeValidation.store), storeController.register);
route.get("/getStore/:id", storeController.getStore);
route.delete("/delete/:id", storeController.deleteStore);
route.put("/update/:id", validate(storeValidation.store), storeController.updateStore);

module.exports = route;
