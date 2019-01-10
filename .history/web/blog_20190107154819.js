
var path = new Map();
var timeUtile = require("../util/ctime");
var writeRes = require("../util/response");
var tools = require('../util/tools');

function editorBlog (response,request) {
    response.on('data',(data) => {
        var d = dealPostData(data);
        console.log(d);
    })
}
path.set("/editorBlog", editorBlog);

module.exports.path = path;