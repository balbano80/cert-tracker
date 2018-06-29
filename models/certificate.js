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

        //to set up relationships

        Certificate.belongsTo(models.Cert-crew, {
            foreignKey: {
                allowNull: false
            }
        });
        // Certificate.belongsTo(models.Employee-cert, {
        //     foreignKey: {
        //         allowNull: false
        //     }
        // });
    };
    return Certificate;
};