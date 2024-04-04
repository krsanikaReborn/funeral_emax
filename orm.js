const SequelizeAuto = require('sequelize-auto');
const config = require('./config/dbConfig');
require('dotenv').config();

console.log(     process.env.DB_DEV_USERNAME,
    process.env.DB_DEV_PASSWORD,
)
const auto = new SequelizeAuto(
    process.env.DB_DEV_DATABASE,
    process.env.DB_DEV_USERNAME,
    process.env.DB_DEV_PASSWORD,
    {
        host: process.env.DB_DEV_SERVER,
        port: parseInt(process.env.DB_DEV_PORT),
        dialect: 'mssql',
        dialectOptions : {
            options : {
                useUTC: false,
                dateFirst: 1,
                encrypt: false,
            }
        },
        pool: {
            max: 5,
            min: 1,
            idleTimeoutMillis: 30000,
        },
        define: {
            // The `timestamps` field specify whether or not the `createdAt` and `updatedAt` fields will be created.
            // This was true by default, but now is false by default
            timestamps: false,
            supportBigNumbers: true,
          },        
    //noAlias: true // as 별칭 미설정 여부
    }
);
auto.run((err)=>{
if(err) throw err;
})

/* 
출처: https://inpa.tistory.com/entry/ORM-📚-시퀄라이즈-자동-생성-sequelize-auto-모듈-사용하기 [👨‍💻 Dev Scroll]
*/
