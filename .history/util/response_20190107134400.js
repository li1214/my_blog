function writeRes (status,msg,data) {
    return JSON.stringify({
        status:status,
        msg:msg,
        data:data
    })
}