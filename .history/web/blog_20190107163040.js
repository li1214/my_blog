
var path = new Map();
var url = require('url');
var timeUtile = require("../util/ctime");
var writeRes = require("../util/response");

function editorBlog (response,request) {
    var params = url.parse(decodeURIComponent(response.url), true).query;
    var tags = params.tags.replace(/ /g, "").replace("，", ",");
    var title = params.title;
    response.on('data',(data) => {
    var text = decodeURIComponent(data.toString()).trim().replace(/\+/g, '').split(/text\=/)[1];
        blogDao.insertBlog(title, tags, text, timeUtile(),null,function(result){
            response.writeHead(200, {
              "Content-Type": "text/html;charset:utf-8"
            });
            response.write(writeRes.writeRes("success", "插入成功！", null));
            response.end();
        })
    })
}
path.set("/editorBlog", editorBlog);

module.exports.path = path;