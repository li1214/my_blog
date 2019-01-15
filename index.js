const express = require('express');
var globalConfig = require('./config');
var loader = require('./loader')

const app = new express();
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", '*');
	res.header('Access-Control-Allow-Credentials', true);//告诉客户端可以在HTTP请求中带上Cookie
	res.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, " +
	    "Last-Modified, Cache-Control, Expires, Content-Type, Content-Language, Cache-Control, X-E4M-With,X_FILENAME");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})



app.use(express.static(globalConfig.page_path));

app.post("/editorEveryday", loader.get('/editorEveryday'));
app.get("/getEveryday", loader.get("/getEveryday"));
//关于博客
app.post("/editorBlog", loader.get('/editorBlog'));
app.get('/getBlog', loader.get('/getBlog'))
app.get("/getBlogCount", loader.get('/getBlogCount'));
app.get("/getAllBlog", loader.get('/getAllBlog'));
app.get("/getBlogById", loader.get('/getBlogById'));
app.get("/getHotBlog", loader.get('/getHotBlog'));
app.get("/selectByTag", loader.get("/selectByTag"));
app.get("/getBlogByKeywords", loader.get('/getBlogByKeywords'));
//关于标签
app.get("/selectTagCount", loader.get('/selectTagCount'));
app.get("/selectRandomTag", loader.get('/selectRandomTag'));
//关于留言评论
app.post("/addComment", loader.get('/addComment'));
app.get("/selectNewComments", loader.get('/selectNewComments'));
app.get("/selcetByBlogId", loader.get('/selcetByBlogId'));
app.get('/selectById', loader.get('/selectById'));
app.get("/selectCountByBlogId", loader.get('/selectCountByBlogId'));
app.get("/createCode", loader.get('/createCode'));

app.listen(globalConfig.port, () => {
  console.log("It is Ok");
});
