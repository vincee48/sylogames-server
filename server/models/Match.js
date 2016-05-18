'use strict';

module.exports = function(sequelize, DataTypes) {
    var Match = sequelize.define('Match', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        status: {
            type: DataTypes.ENUM('In Progress', 'Complete')
        }
    }, {
        classMethods: {
            associate: function(models) {
                Match.belongsToMany(models.Player, { through: 'Player_Match' });
                Match.hasMany(models.Turn, { as: 'Match_Turn' });
                Match.hasMany(models.HeroInstance, { as: 'Match_HeroInstance' });
            }
        }
    });

    return Match;
};