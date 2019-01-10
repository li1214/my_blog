var url = require('url');
var tagDao = require('../dao/tag')
var path = new Map();

function selectRandomTag (resquest,response){
    tagDao.selectRandomTag(15,(res) => {
        response.writeHead(200, {
            "Content-Type": "text/html;charset:utf-8"
        });
        response.write(writeRes.writeRes("200", "查询成功！！！", res));
        response.end();
    })
}

path.set("/selectRandomTag", selectRandomTag);
module.exports.path = path;