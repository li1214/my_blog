
var path = new Map();
var url = require('url');
var timeUtile = require("../util/ctime");
var writeRes = require("../util/response");
var blogDao = require('../dao/blog');
var tagDao = require('../dao/tag');

function editorBlog(request, response) {
    var params = url.parse(decodeURIComponent(request.url), true).query;
    var tags = params.tags.replace(/ /g, "").replace("，", ",");
    var title = params.title;
    request.on('data',(data) => {
    var text = decodeURIComponent(data.toString()).trim().replace(/\+/g, '').split(/text\=/)[1];
        blogDao.insertBlog(title, text, 0,tags,timeUtile.getNow(),null,function(result){
            response.writeHead(200, {
              "Content-Type": "text/html;charset:utf-8"
            });
            response.write(writeRes.writeRes("success", "插入成功！", null));
            response.end();
        })
    })
}
function  getBlog(request,response) {
    var params = url.parse(decodeURIComponent(request.url), true).query;
    var page = params.page;
    var pagesize = params.pagesize;
    blogDao.selectBlog(page,pagesize,(result) => {
       result.forEach(element => {
           element.content = element.content.replace(/<img[\w\W]*">/, "");
           element.content = element.content.replace(/<[\w\W]{1,5}>/g, "");
           element.content = element.content.substring(0, 300);
       });
        response.writeHead(200, {
            "Content-Type": "text/html;charset:utf-8"
        });
        response.write(writeRes.writeRes("success", "查询成功！", result));
        response.end();
    })
}


path.set("/editorBlog", editorBlog);
path.set("/getBlog", getBlog);

function insertTags (tags,blogid) {
    tagDao.inserTags(tags,blogid,function(resulr){

    });
}
module.exports.path = path;