
var everydayDao = require('../dao/everyday');
var timeUtile = require("../util/ctime");
var writeRes = require('../util/response')
var path = new Map();

function editorEveryday(request,response) {
    request.on('data',(data) =>{
       var text = data.toString().split('=')[1].trim();
        everydayDao.insertEveryday(text, timeUtile.getNow(),function(result){
            response.writeHead(200);
            response.write
        });
    })
}
path.set("/editorEveryday", editorEveryday);

module.exports.path = path;