var czSql = require("../util/sql");

function insertComment (blogid,parent,parentName,username,text,email,ctime,utime,success) {
    var insertSql = "insert into comments () values ();";
    var params = [blogid, parent, parentName, username, text, email, ctime, utime];
    czSql.operSql(insertSql,params,success)
}

module.exports.insertComment = insertComment;
