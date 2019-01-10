

var path = new Map();

function editorEveryday(request,response) {
    request.on('data',(data) =>{
        console.log(data.toString())
    })
}
path.set("/editorEveryday", editorEveryday);

module.exports.path = path;