var fs = require('fs');

var globalConfig = {};

var conf = fs.readFileSync('./server.conf');
var confArr = conf.toString().split('\n');
confArr.forEach(item => {
    var [key,value] = item.split('=')
    globalConfig[key.trim()] = value.trim();
})