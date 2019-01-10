var url = require('url');
var timeUtile = require("../util/ctime");
var writeRes = require("../util/response");
var commentDao = require('../dao/comment')

var path = new Map();

function addComment (request,response)  {
    var params = url.parse(request.url,true).query;
    var blogid = params.blogid;
    var parent = params.parent;
    var parentName = params.parentName;
    var username = params.username;
    var email = params.email;
    var text = params.text;
    request.on('data',(data) => {
        commentDao.insertComment(blogid,parent,parentName,username,email,text,timeUtile.getNow(),null,(res => {
            response.writeHead(200, {
                "Content-Type": "text/html;charset:utf-8"
            });
            response.write(writeRes.writeRes("success", "插入成功！", null));
            response.end();
        }));
    })
}

path.set("/addComment", addComment);

module.exports.path = path;