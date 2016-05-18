'use strict';

module.exports = function(sequelize, DataTypes) {
    var HeroInstance = sequelize.define('HeroInstance', {
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
        },
        health: {
            type: DataTypes.INTEGER
        },
        positionX: {
            type: DataTypes.FLOAT
        },
        positionY: {
            type: DataTypes.FLOAT
        }
    }, {
        classMethods: {
            associate: function(models) {
                HeroInstance.belongsTo(models.Hero, { as: 'Hero_HeroInstance' });
                HeroInstance.belongsTo(models.Match, { as: 'Match_HeroInstance' });
            }
        }
    });

    return HeroInstance;
};