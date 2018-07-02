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

        Crew.belongsTo(models.Site, {
            foreignKey: {
                allowNull: false
            }
        });

        Crew.belongsToMany(models.Certificate, {
            through: {model: models.CrewCert}
        });

        Crew.hasMany(models.Employee, {
            onDelete: "cascade"
        });
    };

    return Crew;
};