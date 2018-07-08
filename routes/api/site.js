const router = require("express").Router();
const siteController = require("../../controllers/siteController");



router.route("/")

  .get(siteController.findAll)
  .post(siteController.create);

// router
//   .route("/dashboard/:id")
//   .get(siteController.findById)
//   .put(siteController.update)
//   .delete(siteController.remove);

module.exports = router;

// app.get('/dashboard', (req, res) => {

//     const SITE_QUERY = "SELECT * FROM sites";
//     // const ID_CHECK = "SELECT id FROM companies";
//     let siteArray = [];
//     connection.query(SITE_QUERY, (err, results) => {
//       if (err) {
//         return res.send(err)
//       } else {
//         return res.json({ data: results })
//         console.log(data.results)
//         for (var i = 0; data.results.length; i++) {
//           if (data.results.id === 1) {
//             siteArray.push(data.results.name)
//           }
//         }
//       }
//     })
//   });