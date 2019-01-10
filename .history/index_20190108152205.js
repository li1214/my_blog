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

app.listen(globalConfig.port, () => {
  console.log("It is Ok");
});
