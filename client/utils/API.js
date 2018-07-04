import axios from "axios";

export default {
  // Gets all employee
  getEmployee: function() {
    return axios.get("/api/employee");
  },
  // Gets the employee with the given id
  // getEmployee: function(id) {
  //   return axios.get("/api/employee/" + id);
  // },
  // Deletes the employee with the given id
  deleteEmployee: function(id) {
    return axios.delete("/api/employee/" + id);
  },
  // Saves an employee to the database
  saveEmployee: function(employeeData) {
    console.log("Form submission data: ", employeeData);
    return axios.post("/api/employee", employeeData);
  },

  // creates a new Admin in the admins table of the database
  createAdmin: function(newAdmin) {
    console.log("in utils API folder", newAdmin);
    return axios.post("/api/signup", newAdmin);
  },
  //reach out to the database, verify admin(user) credentials
  signIn: function(admin){
    console.log("in utils API folder", admin)
    return axios.get("/api/signin/" + admin.email, admin)
  }
};
