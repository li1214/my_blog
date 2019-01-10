function writeRes() {
    return function (response, code, status, msg, data) {
        console.log(1)
        response.writeHead(code, { "Content-Type": "text/html;charset:utf-8" });
        console.log(2)
    response.write(
      JSON.stringify({
        status: status,
        msg: msg,
        data: data
      })
    );
    response.end();
        console.log(3)
  };
}

module.exports.writeRes = writeRes;