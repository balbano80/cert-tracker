var API = require("./API");

// Find reminder dates for each Employee
    function createReminders() {

        var empId;
        var certId;
        var obDate;

        // First loop through each employee
        var result = API.getEmployeeCerts();
            console.log(result);
            // empId = res.dbEmployeeCerts.EmployeeId;
            // certId = dbEmployeeCerts.CertificateId;
            // obDate = dbEmployeeCerts.date_obtained;

            // for (var i = 0; i < empId.length; i ++) {
                

            // }
        

    // Loop inside that loop

    // Loop through each cert for this employee

    // Get date obtained and deduct that from todays date

    // Turn date obtained into number of days ago assign to VAR

    // Get valid for length and deduct from VAR

    // Assign resutl to new var

    // Push that into reminder table

    }

createReminders();