'use strict';

module.exports = function(sequelize, DataTypes) {
    var Player = sequelize.define('Player', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        deviceId: {
            type: DataTypes.STRING
        },
        deviceToken: {
            type: DataTypes.STRING
        },
        facebookId: {
            type: DataTypes.STRING
        },
        experience: {
            type: DataTypes.INTEGER
        },
        gold: {
            type: DataTypes.INTEGER
        },
        gems: {
            type: DataTypes.INTEGER
        }
    }, {
        classMethods: {
            associate: function(models) {
                Player.belongsToMany(models.Match, { through: 'Player_Match' });
                Player.hasMany(models.Hero, { as: 'Player_Hero' });
            }
        }
    });

    return Player;
};