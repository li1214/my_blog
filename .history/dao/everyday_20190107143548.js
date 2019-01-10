var czSql = require('../util/sql');

function insertEveryday(content, ctime,success){
    var insertSql = "insert into every_day (`content`, `ctime`) values (?, ?)";
    var params =[content,ctime];
    czSql.operSql()
    var connection = dbutil.createConnection();
    connection.connect(insertSql, params,success);
    connection.query(insertSql, params, function(err, result) {
      if (err == null) {
        success(result);
      } else {
        console.log(error);
      }
    });
    connection.end();
}
function selectEveryDay (success) {
    var selectSql = "select * from every_day order by id desc limit 1;";
    var params = [];
    var connection = dbutil.createConnection();
    connection.connect();
}
module.exports.insertEveryday = insertEveryday;