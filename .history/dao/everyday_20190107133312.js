var dbutil = require('./DBUtil');

function insertEveryday(content, ctime,success){
    var insertSql = 'insert into every_day (`content`,`ctime`) value(?,?)';
    var params =[content,ctime]
}