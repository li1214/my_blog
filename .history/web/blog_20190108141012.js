
var path = new Map();
var url = require('url');
var timeUtile = require("../util/ctime");
var writeRes = require("../util/response");
var blogDao = require('../dao/blog');
var tagDao = require('../dao/tag');
var tag_blog_mappingDao = require('../dao/tag_blog_mappingDao');

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
            //插入到标签表 插入之前需要先搜索是否已经存在
            var blogid = result.id;
            var tagsList = [];
            tagsList = tags.replace(/，/g, ',').split(',');
            tagsList.forEach(item => {
                selectTag(item, blogid);
            })
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

function selectTag (tag,blogid) {
    tagDao.selectTag(tag,res => {
        if(res == null || res.length == 0){
            insertTag(tag,blogid);
        }else{
            tag_blog_mappingDao.insetTag_blog_mapping(res[0].id, blogid, timeUtile.getNow(),null, result => {})
        }
    })
}
function insertTag (tag,blogid) {
    tagDao.inserTag(tag, timeUtile.getNow(),null,function(result){
        console.log(result)
    });
}
module.exports.path = path;