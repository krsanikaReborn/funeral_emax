const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    return sequelize.define('ollyholder', {
        'cus_no' : {
            type: DataTypes.STRING(50),
            primaryKey : true,
        },
        'olly_id' : {
            type: DataTypes.STRING(50), 
            primaryKey : true,
        },

    }, {
        sequelize,
        tableName: 'ollyholder',
        charset: 'utf8',
        collate : 'utf8_general_ci',
    
    })
}