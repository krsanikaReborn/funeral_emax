const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    return sequelize.define('user', {
        'CUS_NO' : {
            type: DataTypes.STRING(50),
            primaryKey : true,
        },
        'CUS_DATE' : {
            type: DataTypes.STRING(100), 
        },
        'CUS_PERSONCHK' : {
            type: DataTypes.STRING(100), 
        },
        'CUS_IDNTY_ID' : {
            type: DataTypes.STRING(100), 
        },

        'MOBILE' : {
            type: DataTypes.STRING(100), 
        },

        'EMAIL' : {
            type: DataTypes.STRING(100), 
        },

        'CUS_COM_ADDRESS' : {
            type: DataTypes.STRING(100), 
        },

        'BIZ_CEO' : {
            type: DataTypes.STRING(100), 
        },

        'BIZ_NAME' : {
            type: DataTypes.STRING(100), 
        },

        'BIZ_CND' : {
            type: DataTypes.STRING(100), 
        },

        'BIZ_ITEM' : {
            type: DataTypes.STRING(100), 
        },

        'COMTEL' : {
            type: DataTypes.STRING(100), 
        },

        'CUS_COMZIP' : {
            type: DataTypes.STRING(100), 
        },

        'CUS_COM_ADDRESS' : {
            type: DataTypes.STRING(100), 
        },

    }, {
        sequelize,
        tableName: 'NOVA_MEB0100V',
        charset: 'utf8',
        collate : 'utf8_general_ci',
    
    })
}