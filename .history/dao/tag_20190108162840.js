var czSql = require("../util/sql");

function insertTag (tag,ctime,utime,success) {
    var insertSql = "insert into tag (`tag`,`ctime`,`utime`) values (?,?,?)";
    var params = [tag,ctime,utime];
    czSql.operSql(insertSql,params,success);
}
function selectTag (tag,success) {
    var selectSql = "select * from tag where tag = ?;";
    var params =[tag];
    czSql.operSql(selectSql, params, success);
}
function selectRandomTag (success) {
    var selectSql = "select * from tag;";
    var params = [];
    czSql.operSql(selectSql, params, success);
};
function selectCount(success) {
    var selectSql = "";
    var params =[];
    czSql.operSql(selectSql, params, success);
}

module.exports.selectCount = selectCount;
module.exports.selectRandomTag = selectRandomTag;
module.exports.insertTag = insertTag;
module.exports.selectTag = selectTag;