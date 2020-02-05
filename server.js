const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

let app = express();

let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "Tyler",
    password: "eevee",
    database: "burgers_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

  app.use(express.static("app/public"));

  // Routes
  // =============================================================
  require("./routes/api-routes.js")(app);
  
  // Starts the server to begin listening
  // =============================================================
  db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
