function writeRes() {
    return function (response, code, status, msg, data) {
    response.writeHead(code, { "Content-Type": "text/html;charset:utf-8" });
    response.write(
      JSON.stringify({
        status: status,
        msg: msg,
        data: data
      })
    );
    response.end();
  };
}

module.exports.writeRes = writeRes;