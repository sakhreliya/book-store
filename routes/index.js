const express = require("express");
const routes = express.Router();
const storeRoute = require("./store.route");

routes.use("/store", storeRoute);

module.exports = routes;
