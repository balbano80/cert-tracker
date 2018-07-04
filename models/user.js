module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
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


    User.associate = function (models) {

        User.belongsTo(models.Company, {
            foreignKey: {
                allowNull: false
            }
        });
    };


      //Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password

      
    //Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    //Commented out during testing
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    //Hooks are automatic methods that run during various phases of the User Model lifecycle
    //In this case, before a User is created, we will automatically hash their password

    User.hook("beforeCreate", function (user) {
        User.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return User;
}
