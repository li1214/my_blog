var mysql = require('mysql');

function createConnection () {
    var connect = mysql.createConnection({
        host:'47.75.75.38',
        port:'3306',
        user:'wike123456',
        password:'123yuanzhiligongzhao123',
        database:'my_blog'
    });
    return connect;
}

module.exports.createConnection = createConnection;
