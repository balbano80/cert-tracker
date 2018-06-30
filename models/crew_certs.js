module.exports = function (sequelize, DataTypes) {
    var Crew_certs = sequelize.define("Crew_certs", {
        crew_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cert_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    Crew_certs.associate = function (models) {

        //to set up relationships

        // Certificate.hasMany(models.Crew, {
        //     foreignKey: {
        //         allowNull: false
        //     }
        // });
        // Certificate.belongsTo(models.Employee-cert, {
        //     foreignKey: {
        //         allowNull: false
        //     }
        // });
    };
    return Crew_certs;
};