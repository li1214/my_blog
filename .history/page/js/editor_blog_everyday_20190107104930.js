$(function () {
    var E = window.wangEditor
    //创建blog富文本
    var blog = new E('#blog');
    ditor.customConfig.uploadImgShowBase64 = true;
    blog.create()
})