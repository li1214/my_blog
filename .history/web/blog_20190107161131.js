
var path = new Map();
var url = require('url');
var timeUtile = require("../util/ctime");
var writeRes = require("../util/response");

function editorBlog (response,request) {
    var params = url.parse(decodeURIComponent(response.url), true).query;
    var tags = params.tags.replace(/ /g, "").replace("，", ",");
    var title = params.title;
    response.on('data',(data) => {
        var text = decodeURIComponent(data.toString()).trim().replace(/\+/g, '&nbsp;').split(/\g/)[1];
        console.log(d);
    })
}
path.set("/editorBlog", editorBlog);

module.exports.path = path;