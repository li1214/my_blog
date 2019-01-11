var czSql = require("../util/sql");

function insetTag_blog_mapping(tagid, blogid, ctime, utime, success) {
    var insertSql = "insert into tag_blog_mapping (`tag_id`,`blog_id`,`ctime`,`utime`) values (?,?,?,?)";
    var params = [tagid, blogid, ctime, utime];
    czSql.operSql(insertSql, params, success);
}

function selectByTag(tagid, page, pagesize, success) {
    var selectSql = "select * from tag_blog_mapping where tag_id = ? limit ?,?;";
    var params = [tagid, (page - 1) * pagesize, pagesize * 1];
    czSql.operSql(selectSql, params, success);
}
function selectByTagIdCount(tagid, success) {
    var selectSql = "select count(1) as count from tag_blog_mapping where tag_id = ?;";
    var params = [tagid];
    czSql.operSql(selectSql, params, success);
}

module.exports.selectByTagIdCount = selectByTagIdCount;
module.exports.insetTag_blog_mapping = insetTag_blog_mapping;
module.exports.selectByTag = selectByTag;