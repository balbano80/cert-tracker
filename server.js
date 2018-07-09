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
    console.log("in app.post /login block res", res.domain);
    if (!res){
      console.log("in !res block");
      res.json({status: "could not be found"});
    }
    else{
      db.User.findOne({
        where: {
          email: req.body.email
        }
      }).then(function(result){
        console.log("result", result.dataValues);
        res.json(result);
      })  
    }
  });
// Route config -------------------------------------------/
app.use(routes);

// app.get('/api', function(req, res) {
//   res.set('Content-Type', 'application/json');
//   res.send('{"message":"Hello World"}')
// });



// If no API routes are hit, send the React app
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

// app.post("/login", passport.authenticate("local"), function (req, res) {
//   // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
//   // So we're sending the user back the route to the members page because the redirect will happen on the front end
//   // They won't get this or even be able to access this page if they aren't authed
//   console.log("req", req)
//   console.log("res", res)
//   db.User.findOne({
//     where: {
//       email: req.body.email
//     }
//   }).then(function(result){
//     console.log("result", result);
//   })
//   // console.log("res", res);
//   // res.json(res);
//   // res.json("/dashboard");
//   // res.render('members')
// });

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
