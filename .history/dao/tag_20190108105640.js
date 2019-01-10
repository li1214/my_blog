var czSql = require("../util/sql");

function insertTags (tags,ctime,utime,success) {
    var insertSql = "insert into tag (`tag`,`ctime`,`utime`) values (?,?,?)";
    var params = [tags,ctime,utime];
    czSql.operSql(insertSql,params,success);
}

module.exports.insertTags = insertTags;