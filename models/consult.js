const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    return sequelize.define('consult', {
        'seq' : {
            type: DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,

        },
        'category_id' : {
            type: DataTypes.INTEGER,
        },        
        'name' : {
            type: DataTypes.STRING(50),
        },
        'org' : {
            type: DataTypes.STRING(50),
        },
        'pos' : {
            type: DataTypes.STRING(50),
        },
        'email' : {
            type: DataTypes.STRING(50),
        },
        'tel' : {
            type: DataTypes.STRING(50),
        },
        'title' : {
            type: DataTypes.STRING(50),
        },
        'wish_time' : {
            type: DataTypes.STRING(50),
        },
        'content' : {
            type: DataTypes.STRING(50),
        },
        'olly_id' : {
            type: DataTypes.STRING(50),
        },
        'is_marketing_agree' : {
            type: DataTypes.BOOLEAN,
        },
    }, {
        sequelize,
        tableName: 'Consult',
        charset: 'utf8',
        collate : 'utf8_general_ci',
        hasTrigger: true,
    })
}