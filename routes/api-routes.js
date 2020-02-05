let db = require("../models");



module.exports = function(app) {

  // Get all Burgers
  app.get("/api/Burgers", function(req, res) {
    db.burgers.findAll({}).then(function(dbburgers) {
      res.json(dbburgers);
    });

  });

  // Add a Burger
  app.post("/api/Burgers", function(req, res) {
    Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
    }).then(function(dbburgers) {
      res.json(dbburgers);
    });

  });

};


app.put("/api/Burgers/:id", function(req, res) {
  db.burgers.update({
    devoured: req.body.devoured
  }, {
    where: {
      id: req.body.id
    }
  }).then(function(dbburgers) {
    res.json(dbburgers);
  });
});

