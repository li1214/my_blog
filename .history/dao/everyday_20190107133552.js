var dbutil = require('./DBUtil');

function insertEveryday(content, ctime,success){
    var insertSql = 'insert into every_day (`content`,`ctime`) value(?,?)';
    var params =[content,ctime];
    var connect = dbutil.createConnection();
    connect.connect();
    connect.query(insertSql,params,function(err,result){
        if(err == null){
            success(result)
        }else{
            console.log(error)
        }
    })
    connect.end();
}