module.exports = function (sequelize, DataTypes) {
    var Certificate = sequelize.define("Certificate", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        valid_for: {
            //currently set up for number of days(int)
            type: DataTypes.INTEGER,
            allowNull: false,
        }
 

    });

    Certificate.associate = function (models) {

    //     //to set up relationships
        Certificate.hasMany(models.Reminder, {
            onDelete: "cascade"
        })

        Certificate.belongsToMany(models.Crew, {
            through: {model: models.CrewCert}
        });

        Certificate.belongsToMany(models.Employee, {
            through: {model: models.EmployeeCert}
        });
    }
    return Certificate;

};
