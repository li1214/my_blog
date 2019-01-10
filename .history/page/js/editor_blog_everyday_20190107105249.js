$(function () {
    var E = window.wangEditor
    //创建blog富文本
    var blog = new E('#blog');
    blog.customConfig.uploadImgShowBase64 = true;
    blog.create()
    //创建每日一句富文本
    var every = new E("#everyday");
    every.create();
})