
var path = new Map();
var timeUtile = require("../util/ctime");
var writeRes = require("../util/response");
var dealPostData = require('../util/dealPostData')

function editorBlog (response,request) {
    response.on('data',(data) => {
        var d = decodeURIComponent(data);
        console.log(d);
    })
}
path.set("/editorBlog", editorBlog);

module.exports.path = path;