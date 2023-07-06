var mysql = require("mysql");

var { letao_connectionOption } = require("./dbConnectionOption.js");
var pool = mysql.createPool(letao_connectionOption);

//创建连接 sql:sql语句
module.exports.query = (sql) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

      // Use the connection 使用连接 发送 sql 语句到数据库mysql  中的 letao 数据库
      //执行结果，在回调函数中参数二返回
      connection.query(sql, function (error, results, fields) {
        // When done with the connection, release it.  连接上拿到数据后，将当前连接释放回连接池
        connection.release();

        // Handle error after the release.  抛出异常
        if (error) throw error;

        resolve(results);
        // Don't use the connection here, it has been returned to the pool.
      });
    });
  });
};
