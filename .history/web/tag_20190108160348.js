var url = require('url');
var tagDao = require('../dao/tag');
var tag_blog_mappingDao = require('../dao/tag_blog_mappingDao');
var blogDao = require('../dao/blog');
var path = new Map();

function selectRandomTag (resquest,response){
    tagDao.selectRandomTag((res) => {
        if(res.length > 15){
            res = res.slice(0, 15);
        }
        res.sort(function() {
          return Math.random() > 0.5 ? true : false;
        });
        response.writeHead(200, {
            "Content-Type": "text/html;charset:utf-8"
        });
        response.write(writeRes.writeRes("200", "查询成功！！！", res));
        response.end();
    })
}
//根据标签返回blog列表
function selectByTag(request,response) {
    var params = url.parse(request.url,true).query;
    var page = params.page;
    var pagesize = params.pagesize;

    tagDao.selectTag(params.tag, (res) => {
        if(res == null || res.length == 0){
            response.writeHead(200, {
                "Content-Type": "text/html;charset:utf-8"
            });
            response.write(writeRes.writeRes("200", "暂无相关", res));
            response.end();
        }else{
            tag_blog_mappingDao.selectByTag(res[0].id, page,pagesize,(res) => {
                if(res == null || res.length == 0){
                    response.writeHead(200, {
                        "Content-Type": "text/html;charset:utf-8"
                    });
                    response.write(writeRes.writeRes("200", "暂无相关", res));
                    response.end();
                }else{
                    res.forEach(element => {
                        blogDao.selectBlogById(element.blog_id);
                    });
                    
                    console.log(res)
                }
            })
        }
    });
}

path.set("/selectByTag", selectByTag);
path.set("/selectRandomTag", selectRandomTag);
module.exports.path = path;