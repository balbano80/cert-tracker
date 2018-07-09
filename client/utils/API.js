import axios from "axios";
// var passport = require("../../config/passport");

export default {
  // Gets all employee
  getEmployees: function() {
    return axios.get("/api/employee");
  },
  // Gets the employee with the given id
  getEmployee: function(id) {
    return axios.get("/api/employee/" + id);
  },
  // Deletes the employee with the given id
  deleteEmployee: function(id) {
    return axios.delete("/api/employee/" + id);
  },
  // Saves an employee to the database
  saveEmployee: function(employeeData) {
    console.log("Form submission data: ", employeeData);
    return axios.post("/api/employee", employeeData);
  },
  // Creates a new company
  createCompany: function(companyData){
    // console.log("in createCompany block, ", companyData);
    return axios.post("/api/company", companyData);
  },
  // creates a new User in the Users table of the database
  createUser: function(newUser) {
    // console.log("in utils API createUser block", newUser);
    return axios.post("/api/user", newUser);
  },
  signIn: function(user){
    console.log("in utils API folder", user)

    return axios.get("/api/signin/" + user.email, user)
  },

  getCert: function (id) {
    return axios.get("/api/certification/" + id);
  },

  getSites: function(){
    return axios.get("/api/site");
  },

  saveCert: function(certData) {
    console.log("Certification data: ", certData);
    return axios.post("/api/certification", certData);
  },
  // Make route for getting data from the EmployeeCerts table
  getEmployeeCerts: function() {
    return axios.get("/api/employeecerts")
  },

  // New route for getting Certificates
  getCertificates: function(id) {
    return axios.get("/api/certificates/")
  },

  // Creates an reminder in the Reminders table
  createReminder: function(reminderData) {
    console.log("Created a new reminder with : ", reminderData);
    return axios.post("/api/reminder", reminderData);
  },
    // Make route for getting data from the EmployeeCerts table
  getCrews: function() {
    console.log("getting all crew data")
    return axios.get("/api/crews");
<<<<<<< HEAD
  },
  getUserData: function(req, res){
    if(!req.user){
      res.json({});
    }
    else{
      console.log("getting user data");
      return axios.get("/api/user_data");
    }
  }

=======

  }// ,


  // return axios.post("/api/user/login", user)


  // }
>>>>>>> 3a08dc9675d7969a5235a82e7b3a0c2c51b716ef
};
