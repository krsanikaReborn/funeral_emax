const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    return sequelize.define('obituary', {
        'CNTRCT_NO' : {
            type: DataTypes.STRING(50),
            primaryKey : true,
        },        
        'DEAD_NM' : {
            type: DataTypes.STRING(50),
        },
        'MOURNER_NM' : {
            type: DataTypes.STRING(50),
        },
        'HALL_NM' : {
            type: DataTypes.STRING(50),
        },
        'DEATH_DT' : {
            type: DataTypes.DATE
        },
        'CASKET_DT' : {
            type: DataTypes.DATE,
        },
        'COFFIN_CARRY_DT' : {
            type: DataTypes.DATE,
        },

    }, {
        sequelize,
        tableName: 'NOVA_CEB100V',
        charset: 'utf8',
        collate : 'utf8_general_ci',
    
    })
}