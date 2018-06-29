// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.get("/", function(req,res){
    res.send("Working");
  })

  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    // console.log(req.user)
    res.json("/members");
    // res.render('members')
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    // console.log(req.body);
    db.User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone_no: req.body.phone_no,
      email: req.body.email,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      password: req.body.password

    }).then(function (user) {
      // res.redirect(307, "/api/signup");
      res.json(user)
      // res.render('/members')
    }).catch(function (err) {
      console.log(err);

      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // app.post("/api/customerconfig", function (req, res) {
  //   // console.log("You are creating a new host!");

  //   // db.Asset.findOne({where: {UserId: req.user.id }})

  //   db.Asset.update(req.body, {
  //     limit: 1,
  //     where: { id: lastRowId },
  //     order: [['createdAt', 'DESC']]
  //   }).then(function (rowsUpdated) {
  //     //only difference is that you get users list limited to 1
  //     //entries[0]
  //     console.log("Rows updated: ", rowsUpdated);
  //     res.json(rowsUpdated);

  //   })

  // });

  var lastRowId;
  var myUserId;

  var userAndRow = lastRowId + myUserId;

  app.post("/upload", function (req, res) {
    console.log("Creating host row")
    var picPath = req.files.file.path;
    var picPath = picPath.replace("\\", "\/");
    var picPath = picPath.replace("public", "");
    console.log(req.user.id);
    db.Asset.create({
      UserId: req.user.id,
      image_url_1: picPath
    }).then(function (asset) {
      // console.log(asset);
      res.json(asset);
      // console.log(picPath);
      myUserId = asset.dataValues.req.user.id;
      lastRowId = asset.dataValues.id;
      // console.log(lastRowId);
    });
  });

  //TRYING TO GET SEARCH PAGE TO FIND BY CITY
  app.get("/api/assets/:city", function (req, res) {
    console.log(req.params.city);
    db.Asset.findAll({
      where: {
        city: req.params.city
      },
    }).then(function (data) {
      res.json(data);
    });
  });

  app.get('/', function(req,res){
    res.redirect('/Home')
  })
};

