var czSql = require("../util/sql");

function insetTag_blog_mapping (tag,blogid,success) {
    var insertSql = "";
    var params =[];
    czSql.operSql(insertSql, params, success);
}

module.exports.insetTag_blog_mapping = insetTag_blog_mapping;