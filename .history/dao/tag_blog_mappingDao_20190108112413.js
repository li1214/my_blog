var czSql = require("../util/sql");

function insetTag_blog_mapping (tagid,blogid,ctime,utime,success) {
    var insertSql = "insert into tag_blog_mapping (`tagid`,`blogid`,`ctime`,`utime`) values (?,?,?,?)";
    var params = [tagid,blogid,ctime,utime];
    czSql.operSql(insertSql, params, success);
}

module.exports.insetTag_blog_mapping = insetTag_blog_mapping;