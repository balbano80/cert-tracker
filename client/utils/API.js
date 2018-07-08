import axios from "axios";
// var passport = require("../../config/passport");

export default {
  // Gets all employee
  getEmployee: function() {
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
    return axios.post("/api/login", user);
    //is going directly to server.js, which is then hitting app.post("/login")
  }

};
