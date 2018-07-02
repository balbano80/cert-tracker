module.exports = function (sequelize, DataTypes) {
    var Reminder = sequelize.define("Reminder", {


        
    });

    Reminder.associate = function (models) {

        Reminder.belongsTo(models.Certificate, {
            foreignKey: {
                allowNull: false
            }
        });

        //need to setup relationship or find how to populate employee_id
    }

    return Reminder;
}