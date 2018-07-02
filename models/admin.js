module.exports = function (sequelize, DataTypes) {
    var Admin = sequelize.define("Admin", {
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
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });


    Admin.associate = function (models) {
        // We're saying that a Asset should belong to an User
        // An Asset can't be created without an user due to the foreign key constraint
        Admin.belongsTo(models.Company, {
            foreignKey: {
                allowNull: false
            }
        });
    };


      //Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    Admin.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password

      
    //Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    //Commented out during testing
    Admin.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    //Hooks are automatic methods that run during various phases of the User Model lifecycle
    //In this case, before a User is created, we will automatically hash their password

    Admin.hook("beforeCreate", function (user) {
        admin.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return Admin;
}
