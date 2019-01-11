var url = require('url');
var timeUtile = require("../util/ctime");
var writeRes = require("../util/response");
var commentDao = require('../dao/comment');
var captcha = require("svg-captcha");

var path = new Map();

function addComment (request,response)  {
    var params = url.parse(request.url,true).query;
    var blogid = params.blogid;
    var parent = params.parent;
    var parentName = params.parentName;
    var username = params.username;
    var email = params.email;

    request.on('data',(data) => {
        var text = JSON.parse(decodeURIComponent(data.toString())).text;
        commentDao.insertComment(blogid,parent,parentName,username,email,text,timeUtile.getNow(),null,(res => {
            response.writeHead(200, {
                "Content-Type": "text/html;charset:utf-8"
            });
            response.write(writeRes.writeRes("200", "插入成功！", null));
            response.end();
        }));
    })
}

path.set("/addComment", addComment);

function selectNewComments (request,response) {
    commentDao.selectNewComments(5,(res => {
        response.writeHead(200, {
            "Content-Type": "text/html;charset:utf-8"
        });
        response.write(writeRes.writeRes("200", "查询成功！", res));
        response.end();
    }));
}

path.set("/selectNewComments", selectNewComments);

function selcetByBlogId (request,response) {
    var params = url.parse(request.url,true).query;
    commentDao.selectByBlogId(params.blogid,(res) => {
        response.writeHead(200, {
          "Content-Type": "text/html;charset:utf-8"
        });
        response.write(writeRes.writeRes("200", "查询成功！", res));
        response.end();
    })
}

path.set("/selcetByBlogId", selcetByBlogId);

function selectById (request,response) {
    var params = url.parse(request.url,true).query;
    commentDao.selectById(params.id,res => {
        response.writeHead(200, {
            "Content-Type": "text/html;charset:utf-8"
        });
        response.write(writeRes.writeRes("200", "查询成功！", res));
        response.end();
    })
}

path.set("/selectById", selectById);

function selectCountByBlogId (request,response) {
    var params = url.parse(request.url,true).query;
    commentDao.selectCountByBlogId(params.blogid,res => {
        response.writeHead(200, {
          "Content-Type": "text/html;charset:utf-8"
        });
        response.write(writeRes.writeRes("200", "查询成功！", res));
        response.end();
    })
}

path.set("/selectCountByBlogId", selectCountByBlogId);

function createCode (request,response) {
    var code = captcha.create({fontSize:50,width:100,height:45});
    response.writeHead(200, {
        "Content-Type": "text/html;charset:utf-8"
    });
    response.write(writeRes.writeRes("200", "返回验证码！", code));
    response.end();
}

path.set("/createCode", createCode);
module.exports.path = path;