var fs = require('fs');

var globalConfig = {};

var conf = fs.readFileSync('./server.conf');
var confArr = conf.toString().split('\n');