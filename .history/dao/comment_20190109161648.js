var czSql = require("../util/sql");

function insertComment (blogid,parent,parentName,username,text,email,ctime,utime,success) {
    var insertSql = "insert into comments (`blog_id`,`parent`,`parent_name`,`username`,`text`,`email`,`ctime`,`utime`) values (?,?,?,?,?,?,?,?);";
    var params = [blogid, parent, parentName, username, text, email, ctime, utime];
    czSql.operSql(insertSql,params,success)
}

function selectNewComments (size,success) {
    var selectSql = "select * from comments order by ctime desc limit ?;";
    var params = [size];
    czSql.operSql(selectSql,params,success)
}

function selectByBlogId(blogid,success) {
    var selectSql = "select * from comments where blog_id = ?;";
    var params = [blogid * 1];
    czSql.operSql(selectSql,params,success)
}
function selectById(id,success) {
    var selectSql = "select * from comments where id = ?;";
    var params =[id];
    czSql.operSql(selectSql,params,success)
}
function selectCountByBlogId(blogid,success) {
    var selectSql = "select count(1) as count from comments where blog_id = ?;";
    var params =[blogid];
    czSql.operSql(selectSql,params,success)
}

module.exports.selectCountByBlogId = selectCountByBlogId;
module.exports.selectById = selectById;
module.exports.selectByBlogId = selectByBlogId;
module.exports.selectNewComments = selectNewComments;
module.exports.insertComment = insertComment;
