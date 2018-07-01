module.exports = function (sequelize, DataTypes) {
    var Crew = sequelize.define("Crew", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        crew_type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
        // as per database outline, need to set up "interval" and frequency attributes
    });

    Crew.associate = function (models) {
        // We're saying that a Asset should belong to an User
        // An Asset can't be created without an user due to the foreign key constraint
        Crew.belongsTo(models.Site, {
            foreignKey: {
                allowNull: false
            }
        });
        // need to setup relationships to "cert-crews" and "employee" tables
    };

    return Crew;
};