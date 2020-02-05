var Burger = require("../models/burgers.js");



module.exports = function(app) {

  // Get all Burgers
  app.get("/", function(req, res) {
    Burger.findAll({}).then(function(results) {
      res.json(results);
    });

  });

  // Add a Burger
  app.post("/api/Burger", function(req, res) {

    console.log("Burger Data:");
    console.log(req.body);

    Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
    
    }).then(function(results) {
      // `results` here would be the newly created Burger
      res.end();
    });

  });

};