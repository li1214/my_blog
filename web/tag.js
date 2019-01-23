var url = require('url');
var tagDao = require('../dao/tag');
var tag_blog_mappingDao = require('../dao/tag_blog_mappingDao');
var blogDao = require('../dao/blog');
var writeRes = require('../util/response');
var path = new Map();

function selectRandomTag(resquest, response) {
    tagDao.selectRandomTag((res) => {
        if (res.length > 15) {
            res = res.slice(0, 15);
        }
        res.sort(function () {
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
function selectByTag(request, response) {
    var params = url.parse(request.url, true).query;
    var page = params.page;
    var pagesize = params.pagesize;

    tagDao.selectTag(params.tag, (res) => {
        if (res == null || res.length == 0) {
            response.writeHead(200, {
                "Content-Type": "text/html;charset:utf-8"
            });
            response.write(writeRes.writeRes("200", "暂无相关", res));
            response.end();
        } else {
            var tag_id = res[0].id;
            tag_blog_mappingDao.selectByTag(tag_id, page, pagesize, (res) => {
                if (res == null || res.length == 0) {
                    response.writeHead(200, {
                        "Content-Type": "text/html;charset:utf-8"
                    });
                    response.write(writeRes.writeRes("200", "暂无相关", res));
                    response.end();
                } else {
                    var bloglist = [];
                    res.forEach(element => {
                        blogDao.selectBlogById(element.blog_id, (result => {
                            bloglist.push(result[0]);
                        }));
                    });
                    getResult(bloglist, res.length, response);
                }
            })
        }
    });
}

function getResult(bloglist, len, response) {
  if (bloglist.length < len) {
    setTimeout(() => {
      getResult(bloglist, len, response);
    }, 10);
  } else {
    bloglist.forEach(item => {
      item.content = item.content.replace(/<img[\w\W]*">/, "");
      item.content = item.content.replace(/<[\w\W]{1,5}>/g, "");
      item.content = item.content.substring(0, 300);
    });
    response.writeHead(200, {
      "Content-Type": "text/html;charset:utf-8"
    });
    response.write(writeRes.writeRes("200", "查询成功!", bloglist));
    response.end();
  }
}
//查询该标签的文章有几篇
function selectTagCount(request, response) {
    var params = url.parse(request.url, true).query;
    var tag = params.tag;
    tagDao.selectTag(tag, res => {
        if(res[0].id){
            tag_blog_mappingDao.selectByTagIdCount(res[0].id, result => {
                response.writeHead(200, {
                    "Content-Type": "text/html;charset:utf-8"
                });
                response.write(writeRes.writeRes("200", "查询成功!", result));
                response.end();
            });
        }else{
            response.writeHead(200, {
                "Content-Type": "text/html;charset:utf-8"
            });
            response.write(writeRes.writeRes("200", "查询成功!", []));
            response.end();
        }
    });
}

path.set("/selectTagCount", selectTagCount);
path.set("/selectByTag", selectByTag);
path.set("/selectRandomTag", selectRandomTag);
module.exports.path = path;