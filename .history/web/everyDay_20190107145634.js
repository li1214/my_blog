
var everydayDao = require('../dao/everyday');
var timeUtile = require("../util/ctime");
var writeRes = require('../util/response')
var path = new Map();

function writeRes(response,code, status, msg, data) {
    response.writeHead(code, { "Content-Type": "text/html;charset:utf-8" });
    response.write(
        JSON.stringify({
            status: status,
            msg: msg,
            data: data
        })
    );
    response.end();
};

function editorEveryday(request,response) {
    request.on('data',(data) =>{
        var text = decodeURIComponent(data.toString().split('=')[1].trim())
        everydayDao.insertEveryday(text, timeUtile.getNow(),function(result){
            writeRes(response, 200, "success", "插入成功！", null);
        });
    })
}

function getEveryday (request,response) {
    everydayDao.selectEveryday ((res) => {
        response.writeHead(200, {
            'Content-Type': 'text/html;charset:utf-8'
        });
        response.write(writeRes.writeRes('success', '返回成功！', res));
        response.end()
    });
}
path.set("/getEveryday", getEveryday);
path.set("/editorEveryday", editorEveryday);

module.exports.path = path;