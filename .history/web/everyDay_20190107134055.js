
var everydayDao = require('../dao/everyday');
var timeUtile = require("./util/ctime");
var path = new Map();

function editorEveryday(request,response) {
    request.on('data',(data) =>{
       var text = data.toString().split('=')[1].trim();
        everydayDao.insertEveryday(text, timeUtile.getNow());
    })
}
path.set("/editorEveryday", editorEveryday);

module.exports.path = path;