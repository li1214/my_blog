var czSql = require("../util/sql");

function insertComment (blogid,parent,parentName,username,text,email,ctime,utime,success) {
    var insertSql = "insert into comments (`blog_id`,`parent`,`parent_name`,`username`,`text`,`email`,`ctime`,`utime`) values (?,?,?,?,?,?,?,?);";
    var params = [blogid, parent, parentName, username, text, email, ctime, utime];
    czSql.operSql(insertSql,params,success)
}

function selectNewComments () {}


module.exports.selectNewComments = selectNewComments;
module.exports.insertComment = insertComment;
