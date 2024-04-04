//models/index.js
//자동으로 생긴 파일이지만 살짝 바꾸었다.
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};
const sConfig = require('../config/dbConfig');

let sequelize;

sequelize = new Sequelize(
  "",
//  process.env.DB_DEV_DATABASE,
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

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//db.VACATION = require('./employee')(sequelize, Sequelize);

module.exports = db;