var mysql = require('mysql');

function createConnection () {
    var connect = mysql.createConnection({
        host:'127.0.0.1',
        port:'3306',
        user:'root',
        password:'root',
        database:'my_blog'
    });
    return connect;
}

module.exports.createConnection = createConnection;
