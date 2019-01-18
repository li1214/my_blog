var czSql = require("../util/sql");

function insertUpload(path, type, ctime, success) {
  var insertSql = "insert into upload (`path`,`type`,`ctime`) value (?,?,?);";
  var params = [path, type, ctime];
  czSql.operSql(insertSql, params, success);
}

function selectImg(success) {
  var selectSql = 'select * from upload';
  var params =[];
  czSql.operSql(selectSql,params,success)
}

module.exports.selectImg = selectImg;
module.exports.insertUpload = insertUpload;