

var path = new Map();

function editorEveryday(request,response) {
    request.on('data',(data) =>{
        console.log(data)
    })
}
path.set("/editorEveryday", editorEveryday);

module.exports.path = path;