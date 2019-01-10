var url = require('url');
var tagDao = require('../dao/tag')
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
function selectByTag (resquest,response) {}

path.set("/selectByTag", selectByTag);
path.set("/selectRandomTag", selectRandomTag);
module.exports.path = path;