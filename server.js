var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");


var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3001;

var routes = require("./routes");

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());
// app.use(express.static("public"));
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());



app.post("/login", passport.authenticate("local"), function (req, res) {
  //   // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  //   // So we're sending the user back the route to the members page because the redirect will happen on the front end
  //   // They won't get this or even be able to access this page if they aren't authed
  // console.log("in app.post /login block req", req.user.dataValues);
  // console.log("in app.post /login block res", res.domain);
  if (!res) {
    console.log("in !res block");
    res.json({ status: "could not be found" });
  }
  else {
    db.User.findOne({
      where: {
        email: req.body.email
      }
    }).then(function (result) {
      console.log("result", result.dataValues);
      res.json(result);
    }).catch(function (err) {
      console.log("Error: ", err);
    })
  }
});

app.get("/api/user_data", function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    // res.json({});
    res.redirect("/");
  }
  else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    var companyName;
    var sites = [];
    db.Company.findOne({
      where: {
        id: req.user.CompanyId
      }
    }).then(function (companyResults) {
      companyName = companyResults.dataValues.name;
    })

    db.Site.findAll({
      where: {
        CompanyId: req.user.CompanyId
      }
    })
    .then(function (siteResults) {
      sites = siteResults;
      })
      .then( function(){
        // console.log("crews", crews);
        var userData = {
          email: req.user.email,
          id: req.user.id,
          CompanyId: req.user.CompanyId,
          companyName: companyName,
          sites: sites,
        }
        res.json(userData);
      })
  };
});

app.get('/logout', function(req, res){
  console.log("in server logout call");
  req.logout();
  res.redirect('/');
});

// Route config -------------------------------------------/
app.use(routes);

app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello World"}')
});

// If no API routes are hit, send the React app
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.info(
      "==> 🌎  Listening on port %s. Visit http:/127.0.0.1:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
