const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    return sequelize.define('funeral_support', {
        'seq' : {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            primaryKey : true,
        },
        'olly_id' : {
            type: DataTypes.STRING(50),
        },
        'olly_nm' : {
            type: DataTypes.STRING(50),
        },
        'cust_cd' : {
            type: DataTypes.STRING(50),
        },
        'cust_nm' : {
            type: DataTypes.STRING(50),
        },
        'team' : {
            type: DataTypes.STRING(50),
        },
        'emp_nm' : {
            type: DataTypes.STRING(50),
        },
        'tel' : {
            type: DataTypes.STRING(50),
        },
        'duty' : {
            type: DataTypes.STRING(50),
        },
        'support_type' : {
            type: DataTypes.STRING(50),
        },
        'hall_cd' : {
            type: DataTypes.STRING(50),
        },
        'hall_nm' : {
            type: DataTypes.STRING(50),
        },
        'region' : {
            type: DataTypes.STRING(50),
        },
        'fmly_bc' : {
            type: DataTypes.STRING(50),
        },
        'nm' : {
            type: DataTypes.STRING(50),
        },
        'accept_dt' : {
            type: DataTypes.DATEONLY,
        },

        'accept_time' : {
            type: DataTypes.STRING(50),
        },

        'ship_dt' : {
            type: DataTypes.DATEONLY,
        },

        'ship_time' : {
            type: DataTypes.STRING(50),
        },

        'stat_bc' : {
            type: DataTypes.STRING(50),
        },

        'support_item' : {
            type: DataTypes.STRING(50),
        },

        'etc_item' : {
            type: DataTypes.STRING(50),
        },
        'remark' : {
            type: DataTypes.STRING(50),
        },
        'man_count' : {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        'event_no' : {
            type: DataTypes.STRING(50),
        },
        'so_no' : {
            type: DataTypes.STRING(50),
        },
        'cid' : {
            type: DataTypes.STRING(50),
        },
        'cdt' : {
            type: DataTypes.DATE,
        },
        'mid' : {
            type: DataTypes.STRING(50),
        },
        'mdt' : {
            type: DataTypes.DATE,
        }


    }, {
        sequelize,
        tableName: 'funeral_support',
        charset: 'utf8',
        collate : 'utf8_general_ci',
    })
}