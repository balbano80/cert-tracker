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
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [9]
            }
        }
    });


    // Employee.associate = function (models) {
    //     // We're saying that a Asset should belong to an User
    //     // An Asset can't be created without an user due to the foreign key constraint
    //     Employee.belongsTo(models.Crew, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });


        // Employee.hasMany(models.Employee-cert, {
        //     onDelete: "cascade"
        // });

    // };

    return Employee;
}