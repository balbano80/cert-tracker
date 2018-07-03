module.exports = function (sequelize, DataTypes) {
    var Reminder = sequelize.define("Reminder", {

        cert_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        employee_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date_expiration: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }      
    });

    // Reminder.associate = function (models) {

    // }

    return Reminder;
}