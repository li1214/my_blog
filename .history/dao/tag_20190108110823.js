var czSql = require("../util/sql");

function insertTag (tag,ctime,utime,success) {
    var insertSql = "insert into tag (`tag`,`ctime`,`utime`) values (?,?,?)";
    var params = [tag,ctime,utime];
    czSql.operSql(insertSql,params,success);
}
function select (tag,blogid,success) {
    var selectSql = "";
    var params =[];
    czSql.operSql(insertSql, params, success);
}
module.exports.insertTags = insertTag;