var dbutil = require('./DBUtil');

function insertEveryday(content, ctime,success){
    var insertSql = "insert into every_day (`content`, `ctime`) values (?, ?)";
    var params =[content,ctime];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function(err, result) {
        console.log(err)
        console.log(result);
      if (err == null) {
        success(result);
      } else {
        console.log(error);
      }
    });
    connection.end();
}

module.exports.insertEveryday = insertEveryday;