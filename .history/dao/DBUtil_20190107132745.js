var mysql = require('mysql');

function createConnection () {
    var connect = mysql.createConnection({
        host:'47.75.75.38',
        port:'3306',
        user:'root',
        password:'root',
        database:'my_blog'
    });

}