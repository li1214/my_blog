function operSql (commond,params,callback) {
    var q = dbutil.createConnection();
    q.connect();
    q.query(commond, params, (err,res) => {

    })
}