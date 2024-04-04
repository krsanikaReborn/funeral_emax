const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){
    return sequelize.define('contract', {
        'CUS_NO' : {
            type: 'VARCHAR(16)',
            primaryKey : true,
        },        
        'CUS_NAME' : {
            type: DataTypes.STRING(50),
        },            
        'CUS_MOBILE' : {
            type: 'VARCHAR(100)',
        },
        'CUS_TEL' : {
            type: 'VARCHAR(100)',
        },
        'CUS_IDNTY_ID' : {
            type: 'VARCHAR(20)',
        },
        'CUS_ZIP' : {
            type: 'VARCHAR(10)', 
        },
        'CUS_ADDRESS' : {
            type: 'VARCHAR(501)', 
        },

        'CERTIFI_ZIP' : {
            type: 'VARCHAR(10)', 
        },
        'CER_ADDR' : {
            type: 'VARCHAR(1201)', 
        },

        'CNTRCT_NO' : {
            type: 'VARCHAR(20)', 
        },
        "CNTRCT_DATE" : {
            type: 'VARCHAR(10)',
        },
        "CNTRCT_ACCT_NO" : {
            type: DataTypes.NUMERIC,
        },
        'CNTRCT_STATUS_NM' : {
            type: 'VARCHAR(100)', 
        },
        'CNTRCT_STATUS' : {
            type: 'VARCHAR(10)', 
        },
        'CNTRCT_PAY_STTUS_NM' : {
            type: 'VARCHAR(100)', 
        },
        
        'PAY_STATUS_NM' : {
            type: 'VARCHAR(100)', 
        },

        'CUS_MONITORING' : {
            type: 'VARCHAR(100)', 
        },
        'PRO_CODE' : {
            type: 'VARCHAR(10)', 
        },

        'PRO_NAME' : {
            type: 'VARCHAR(100)',
        },

        'PRO_POINT' : {
            type: DataTypes.NUMERIC, 
        },

        'PRO_NUMBER' : {
            type: 'VARCHAR(100)', 
        },

        'PRO_PRICE' : {
            type: 'VARCHAR(100)' 
        },

        'PRO_MONEY' : {
            type: 'VARCHAR(100)' 
        },

        'PAYAMT' : {
            type: 'VARCHAR(100)'
        },

        'TOT_PAY_TIMES' : {
            type: 'VARCHAR(100)', 
        },

        'LAST_TIMES' : {
            type : 'VARCHAR(100)',
        },

        'SPECL_DISC_CNT' : {
            type: DataTypes.NUMERIC, 
        },

        'PREPAY_DISC_CNT' : {
            type: DataTypes.NUMERIC, 
        },
        'DISCOUNT_CNT' : {
            type : 'VARCHAR(100)',
        },        
        'REMAIN_PAYAMT' : {
            type: DataTypes.NUMERIC, 
        },
        'REMAIN_TIMES' : {
            type: DataTypes.FLOAT, 
        },
        'BILL_GUBUN' : {
            type: 'VARCHAR(100)', 
        },

        'BILL_BANK' : {
            type: 'VARCHAR(100)', 
        },
        'BILL_NO' : {
            type: 'VARCHAR(39)', 
        },
        'BILL_MOBILE' : {
            type: 'VARCHAR(50)', 
        },
        'BILL_NAME' : {
            type: 'VARCHAR(50)', 
        },
        'BILL_IDENTITYID' : {
            type: 'VARCHAR(20)', 
        },

        'EXPIRE_DATE' : {
            type: 'VARCHAR(10)', 
        },

        'SA_EMP_CODE' : {
            type: 'VARCHAR(20)', 
        },
        'SA_EMP_NAME' : {
            type: 'VARCHAR(100)', 
        },
        'SA_DEPT_CODE' : {
            type: 'VARCHAR(10)', 
        },
        'SA_DEPT_NM' : {
            type: 'VARCHAR(100)', 
        },

        'ASSURE_TYPE' : {
            type: 'VARCHAR(100)', 
        },
        'DDC_NO' : {
            type: 'VARCHAR(50)',
        },
        'DDC_SEND_DATE' : {
            type: 'VARCHAR(10)', 
        },
        'CANCEL_DATE' : {
            type: 'VARCHAR(10)',
        },
        'PRO_KND' : {
            type: 'VARCHAR(100)', 
        },

        'PAY_GUBUN' : {
            type: 'VARCHAR(10)', 
        },
        'PAY_SDATE' : {
            type: 'VARCHAR(10)', 
        },
        'PAY_DATE' : {
            type: 'VARCHAR(10)',
        },
        'WISHPAY_DATE' : {
            type: 'VARCHAR(100)', 
        },

        'CANCEL_REFU_RATE' : {
            type : 'VARCHAR(100)',
        },

        'CANCEL_REFU_AMT' : {
            type : 'VARCHAR(100)',
        },
        'POST_DESTINATION' : {
            type : 'VARCHAR(6)',
        },
        'CUS_EMP_NM' : {
            type : 'VARCHAR(50)',
        },
        'ORG_CNTRCT_PAY_STTUS_NM' : {
            type : 'VARCHAR(20)',
        },
        'CNTRCT_TIMES' : {
            type : DataTypes.NUMERIC
        }
        
    }, {
        sequelize,
        tableName: 'NOVA_MEB0101V',
        charset: 'utf8',
        collate : 'utf8_general_ci',
    })
}