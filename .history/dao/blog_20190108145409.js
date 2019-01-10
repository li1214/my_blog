var czSql = require("../util/sql");

function insertBlog (title,content,views,tags,ctime,utime,success) {
    var inserSql = "insert into blog (`title`,`content`,`views`,`tags`,`ctime`,`utime`) value (?,?,?,?,?,?);";
    var params = [title,content,views,tags,ctime,utime];
    czSql.operSql(inserSql, params, success);
}

function selectBlog(page,pagesize,success) {
    var selectSql = "select * from blog order by id desc limit ? , ?;";
    var params =[(page - 1) * pagesize,pagesize * 1];
    czSql.operSql(selectSql, params,success);
}
function selectHotBlog (size,success){
    var selectSql = "select * from blog order by views desc limit ?;";
    var params = [size]
    czSql.operSql(selectSql, params, success);
}
function selectBlogById (id,success) {

}

module.exports.selectBlogById = selectBlogById;
module.exports.selectHotBlog = selectHotBlog;
module.exports.insertBlog = insertBlog;
module.exports.selectBlog = selectBlog;