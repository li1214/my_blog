var czSql = require("../util/sql");

function insertBlog (title,content,views,tags,ctime,utime,success) {
    var inserSql = "insert into blog (`title`,`content`,`views`,`tags`,`ctime`,`utime`) value (?,?,?,?,?,?);";
    var params = [title,content,views,tags,ctime,utime];
    czSql.operSql(inserSql, params, success);
}

function selectBlog(page,success) {
    var selectSql = "";
    var params =[];
    czSql.operSql(selectSql, params,success);
}

module.exports.insertBlog = insertBlog;