module.exports = function (sequelize, DataTypes) {
    var EmployeeCert = sequelize.define("EmployeeCert", {

        date_obtained: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    })

    return EmployeeCert;
};