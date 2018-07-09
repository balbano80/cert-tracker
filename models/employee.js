module.exports = function (sequelize, DataTypes) {
    var Employee = sequelize.define("Employee", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false,
            isEmail: true
        },
        phone_number: { 
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [9]
            }
        }
    });


    Employee.associate = function (models) {
        
        Employee.belongsTo(models.Crew, {
            foreignKey: {
                allowNull: false,
                unique: false
            }
        });

        Employee.belongsToMany(models.Certificate, {
            through: {model: models.EmployeeCert}
        });

    };

    return Employee;
}