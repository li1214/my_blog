var czSql = require("../util/sql");

function insertBlog (title,content,views,tags,ctime,utime,success) {
    var inserSql = "insert into blog (`title`,`content`,`views`,`tags`,`ctime`,`utime`) value (?,?,?,?,?,?);";
    var params = [title,content,views,tags,ctime,utime];
    czSql.operSql(inserSql, params, success);
}

function selectBlog(page,pagesize,success) {
    var selectSql = "select * from blog order by id desc limit ? , ?;";
    var params =[(page - 1) * pagesize,pagesize * 1];
    console.log(params)
    czSql.operSql(selectSql, params,success);
}

module.exports.insertBlog = insertBlog;
module.exports.selectBlog = selectBlog;