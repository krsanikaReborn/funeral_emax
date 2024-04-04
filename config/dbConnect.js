const sql = require('mssql');
const config = require('./dbConfig');

const connPool = new sql.ConnectionPool(config.dbconfig)
  .connect()
  .then((pool) => {
    console.log('DB연결 성공');
    return pool;
  })
  .catch((err) => {
    console.log('err ', err);
  });

//export {  sql,  connPool }

module.exports = {sql, connPool};
