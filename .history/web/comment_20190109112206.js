var url = require('url');

var path = new Map();

function addComment (request,response)  {

}

path.set("/addComment", addComment);

module.exports.path = path;