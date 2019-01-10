var dbutil = require('./DBUtil');

function insertEveryday(content, ctime,success){
    var insertSql = "insert into every_day (`content`, `ctime`) values (?, ?)";
    var params =[content,ctime];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function(err, result) {
        console.log(err)
      if (err == null) {
        success(result);
      } else {
        console.log(error);
      }
    });
    connect.end();
}

module.exports.insertEveryday = insertEveryday;