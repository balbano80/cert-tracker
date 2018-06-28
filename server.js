var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var path = require("path");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3001;


// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(multer({ dest: "public/tmp/" }));
app.use(express.static(path.join(__dirname, "bower_components")));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// Route config -------------------------------------------/
require("./routes/apiRoutes.js")(app);

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.info(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
