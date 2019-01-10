function writeRes(response,code,status,msg,data) {
    var resString = JSON.stringify({})
    response.writeHead(code, { 'Content-Type': 'text/html;charset:utf-8'})
    response.write(JSON.stringify({
        status: status,
        msg: msg,
        data:data
    }));
}

module.exports.writeRes = writeRes;