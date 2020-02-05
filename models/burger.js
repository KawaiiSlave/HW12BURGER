var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

// Creates a "Burger" model that matches up with DB
let Burger = sequelize.define("burgers", {
  burger_name: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN,
  defaultValue: 0
});

// Syncs with DB
Burger.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;