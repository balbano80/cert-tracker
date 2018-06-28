module.exports = function (sequelize, DataTypes) {
    var Site = sequelize.define("Site", {
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
        }
    });

    Site.associate = function (models) {
        // We're saying that a Asset should belong to an User
        // An Asset can't be created without an user due to the foreign key constraint
        Site.belongsTo(models.Company, {
            foreignKey: {
                allowNull: false
            }
        });

        Site.hasMany(models.Crew, {
            ondelete: "cascade"
        })
    };

    return Site;
}