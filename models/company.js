module.exports = function (sequelize, DataTypes) {
    var Company = sequelize.define("Company", {
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
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len:[5]
            }
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Company.associate = function (models) {
        // We're saying that a Asset should belong to an User
        // An Asset can't be created without an user due to the foreign key constraint
        Company.hasMany(models.Admin, {
            onDelete: "cascade"
        });

        Company.hasMany(models.Site, {
            onDelete: "cascade"
        });
    };
    return Company;
};