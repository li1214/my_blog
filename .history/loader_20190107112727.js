var fs = require('fs');
var globalConfig = require('./config');

var controllerMap = [];
var pathMap = new Map();

var files = fs.readdirSync(globalConfig.web_path)