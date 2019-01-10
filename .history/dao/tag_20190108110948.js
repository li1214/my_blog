var czSql = require("../util/sql");

function insertTag (tag,ctime,utime,success) {
    var insertSql = "insert into tag (`tag`,`ctime`,`utime`) values (?,?,?)";
    var params = [tag,ctime,utime];
    czSql.operSql(insertSql,params,success);
}
function select (tag,success) {
    var selectSql = "select * from tag ";
    var params =[tag];
    czSql.operSql(selectSql, params, success);
}
module.exports.insertTags = insertTag;