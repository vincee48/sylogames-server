'use strict';

module.exports = function(sequelize, DataTypes) {
    var Turn = sequelize.define('Turn', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        turnNumber: {
            type: DataTypes.INTEGER
        }
    }, {
        classMethods: {
            associate: function(models) {
                Turn.belongsTo(models.Match, { as: 'Match_Turn' });
            }
        }
    });

    return Turn;
};