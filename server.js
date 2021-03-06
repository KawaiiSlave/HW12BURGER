let express = require("express");
let exphbs = require("express-handlebars");
let app = express();
let PORT = process.env.PORT || 8080;
let db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

  
require("./routes/api-routes.js")(app);
  
 db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
