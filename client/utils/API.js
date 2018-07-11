import axios from "axios";

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
    return axios.post("/api/employee", employeeData);
  },
  // Creates a new company
  createCompany: function(companyData){
    return axios.post("/api/company", companyData);
  },
  // creates a new User in the Users table of the database
  createUser: function(newUser) {
    return axios.post("/api/user", newUser);
  },
  signIn: function(user){

    return axios.get("/api/signin/" + user.email, user)
  },

  getCert: function (id) {
    return axios.get("/api/certification/" + id);
  },

  getSites: function(){
    return axios.get("/api/site");
  },

  // saveCert: function(certData) {
  //   return axios.post("/api/certification", certData);
  // },
  // Make route for getting data from the EmployeeCerts table
  getEmployeeCerts: function() {
    return axios.get("/api/employeecerts")
  },

  getfindById: function(id) {
    return axios.get("/api/certificates")
  },

  // New route for getting Certificates
  getCertificates: function() {
    return axios.get("/api/certificates")
  },

  // New route for getting CrewCerts
  getCrewCerts: function(id) {
    return axios.get("/api/crewcerts/" + id);
  },
  getAllCrewCerts: function() {
    return axios.get("/api/crewcerts");
  },
  createCrewCerts: function(certId) {
    return axios.post("/api/crewcerts", certId);
  },
  getCertificate: function(id){
    return axios.get("api/certificates/" + id);
  },

  createCertificates: function(certData) {
    return axios.post("/api/certificates", certData);
  },
  // Creates an reminder in the Reminders table
  createReminder: function(reminderData) {
    return axios.post("/api/reminder", reminderData);
  },
    // Make route for getting data from the EmployeeCerts table
  getCrews: function() {
    return axios.get("/api/crews");
  },
  // Get crew by company_id
  getCrewBySite: function(id) {
    return axios.get("/api/employee/" + id);
  },
  getUserData: function(req, res){
    if(!req.user){
      res.json({});
    }
    else{
      return axios.get("/api/user_data");
    }
  }

};
