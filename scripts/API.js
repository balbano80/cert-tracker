var axios = require ("axios");

export default {


    // Make route for getting data from the EmployeeCerts table
    getEmployeeCerts: function() {
      return axios.get("/api/employeecerts", )
    },

    // Creates an reminder in the Reminders table
    createReminder: function(reminderData) {
      console.log("Created a new reminder with : ", reminderData);
      return axios.post("/api/reminder", reminderData);
    }

};
