var dbutil = require('./DBUtil');

function insertEveryday(content, ctime,success){
    var insertSql = "insert into every_day (`content`, `ctime`) values (?, ?)";
    var params =[content,ctime];
    var connection = dbutil.createConnection();
    connection.connect();
    console.log(params);
    connection.query(insertSql, params, function(err, result) {
      if (err == null) {
        success(result);
      } else {
        console.log(error);
      }
    });
    connect.end();
}

module.exports.insertEveryday = insertEveryday;