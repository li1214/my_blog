var czSql = require("../util/sql");

function insertTags (tags,blogid,success) {
    var insertSql = "insert into tag (`tag`,`ctime`,`utime`) values (?,?,?)";
    var params = [tags,blogid];
    czSql.operSql(insertSql,params,success);
}

module.exports.insertTags = insertTags;