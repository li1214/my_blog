const express = require('express');
var globalConfig = require('./config');
var loader = require('./loader')

const app = new express();
app.use(express.static(globalConfig.page_path));

app.post("/editorEveryday", loader.get('/editorEveryday'));
app.get("/getEveryday", loader.get("/getEveryday"));
app.post("/editorBlog", loader.get('/editorBlog'));
app.get('/getBlog', loader.get('/getBlog'))
app.get("/getBlogCount", loader.get('/getBlogCount'));
app.get("/getAllBlog", loader.get('/getAllBlog'));
app.get("/getBlogById", loader.get('/getBlogById'));
app.get("/getHotBlog", loader.get('/getHotBlog'));
app.get("/selectByTag", loader.get("/selectByTag"));
app.get("/selectTagCount", loader.get('/selectTagCount'));
app.get("/selectRandomTag", loader.get('/selectRandomTag'));
app.post("/addComment", loader.get('/addComment'));
app.get("/selectNewComments", loader.get('/selectNewComments'));
app.get("/selcetByBlogId", loader.get('/selcetByBlogId'));
app.get('/selectById', loader.get('/selectById'));
app.get("/selectCountByBlogId", loader.get('/selectCountByBlogId'));

app.listen(globalConfig.port, () => {
  console.log("It is Ok");
});
