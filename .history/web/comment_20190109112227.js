var url = require('url');
var timeUtile = require("../util/ctime");
var writeRes = require("../util/response");

var path = new Map();

function addComment (request,response)  {

}

path.set("/addComment", addComment);

module.exports.path = path;