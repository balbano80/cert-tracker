// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        phone_no: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        // The password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // User.associate = function (models) {
    //     // Associating Users with Assets
    //     // When an Users is deleted, also delete any associated Assets
    //     User.hasMany(models.Asset, {
    //         onDelete: "cascade"
    //     });
    // };
    // // For booking association
    // User.associate = function(models) {
    //     // Associating Users with Assets
    //     // When an Users is deleted, also delete any associated Assets
    //     User.hasMany(models.Booking, {
    //       onDelete: "cascade"
    //     });
    //   };  

    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    // User.prototype.validPassword = function (password) {
    //     return bcrypt.compareSync(password, this.password);
    // };
    // // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // // In this case, before a User is created, we will automatically hash their password
    // User.hook("beforeCreate", function (user) {
    //     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    // });
    return User;
};