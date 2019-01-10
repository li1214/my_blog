
var path = new Map();
var timeUtile = require("../util/ctime");
var writeRes = require("../util/response");

function editorBlog (response,request) {
    response.on('data',(data) => {
        var d = decodeURIComponent(data.toString()).trim().replace(/\+/g, '&nbsp;').split(/\g/)[1];
        console.log(d);
    })
}
path.set("/editorBlog", editorBlog);

module.exports.path = path;