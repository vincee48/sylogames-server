'use strict';

module.exports = function(sequelize, DataTypes) {
    var Hero = sequelize.define('Hero', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        level: {
            type: DataTypes.INTEGER
        },
        primarySkillLevel: {
            type: DataTypes.INTEGER
        },
        secondarySkillLevel: {
            type: DataTypes.INTEGER
        },
        ultimateSkillLevel: {
            type: DataTypes.INTEGER
        }
    }, {
        classMethods: {
            associate: function(models) {
                Hero.belongsTo(models.Player, { as: 'Player_Hero' });
                Hero.hasMany(models.HeroInstance, { as: 'Hero_HeroInstance' });
            }
        }
    });

    return Hero;
};