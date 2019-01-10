

var path = new Map();

function editorEveryday(request,response) {
    request.on('data',(data) =>{
       var text = data.toString().split('=')[1].trim();
    })
}
path.set("/editorEveryday", editorEveryday);

module.exports.path = path;