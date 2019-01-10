function writeRes(status,msg,data) {
    return function () {
        return JSON.stringify({
            status: status,
            msg:msg,
            data:data
        })
    }
}

module.exports.writeRes = writeRes;