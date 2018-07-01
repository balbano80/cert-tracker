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
  // Saves a employee to the database
  saveEmployee: function(employeeData) {
    return axios.post("/api/employee", employeeData);
  }
};
