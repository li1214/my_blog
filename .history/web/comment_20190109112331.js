var url = require('url');
var timeUtile = require("../util/ctime");
var writeRes = require("../util/response");

var path = new Map();

function addComment (request,response)  {
    var params = url.parse(request.url,true).query;
    request.on('data',(data) => {

    })
}

path.set("/addComment", addComment);

module.exports.path = path;