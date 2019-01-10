var url = require('url');
var timeUtile = require("../util/ctime");
var writeRes = require("../util/response");
var commentDao = require('../dao/comment')

var path = new Map();

function addComment (request,response)  {
    var params = url.parse(request.url,true).query;
    var blogid = params.blogid;
    request.on('data',(data) => {
        commentDao.insertComment()
    })
}

path.set("/addComment", addComment);

module.exports.path = path;