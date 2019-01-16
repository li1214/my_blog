var czSql = require('../util/sql');

function insertEveryday(ctext,etext,author, ctime,success){
  var insertSql = "insert into every_day (`ctext`, `etext`,`author`,`ctime`) values (?,?,?,?)";
  var params = [ctext, etext,author,ctime];
    czSql.operSql(insertSql, params, success)
}
function selectEveryday(success) {
  var selectSql = "select * from every_day order by id desc limit 1;";
  var params = [];
  czSql.operSql(selectSql, params, success);
}

module.exports.insertEveryday = insertEveryday;
module.exports.selectEveryday = selectEveryday;