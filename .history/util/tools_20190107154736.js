function dealPostData (str){
    var result = {}
    var arr = decodeURIComponent(str).trim().split('&');
    arr.forEach(item => {
        result[item.split('=')[0]] = item.split('=')[1]
    })
    return result;
} 

module.exports.dealPostData = dealPostData;