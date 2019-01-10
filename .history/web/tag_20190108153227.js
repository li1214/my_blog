var url = require('url');
var tagDao = require('../dao/tag')
var path = new Map();

function selectRandomTag (resquest,response){
    tagDao.selectRandomTag((res) => {
        if(res.length > 15){
            res.splice(0,14)
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

path.set("/selectRandomTag", selectRandomTag);
module.exports.path = path;