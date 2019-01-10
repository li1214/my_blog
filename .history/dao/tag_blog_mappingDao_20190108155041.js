var czSql = require("../util/sql");

function insetTag_blog_mapping (tagid,blogid,ctime,utime,success) {
    var insertSql = "insert into tag_blog_mapping (`tag_id`,`blog_id`,`ctime`,`utime`) values (?,?,?,?)";
    var params = [tagid,blogid,ctime,utime];
    czSql.operSql(insertSql, params, success);
}

function selectByTag(params) {}

module.exports.insetTag_blog_mapping = insetTag_blog_mapping;
module.exports.selectByTag = selectByTag;