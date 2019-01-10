function operSql (commond,params,callback) {
    var q = dbutil.createConnection();
    q.connect();
    q.query(commond, params, (err,res) => {
        if(err == null){
            callback(res);
        }else{
            console.log(err);
        }
    })
    q.end();
}
module.exports.operSql = operSql;