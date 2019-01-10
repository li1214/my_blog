var czSql = require("../util/sql");

function insertComment () {
    var insertSql = "insert into comments () values ();";
    var params = [];
    czSql.operSql(insertSql,params,success)
}

module.exports.insertComment = insertComment;
