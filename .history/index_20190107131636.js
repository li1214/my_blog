const express = require('express');
var globalConfig = require('./config');
var loader = require('./loader')

const app = new express();
app.use(express.static(globalConfig.page_path));
app.listen(globalConfig.port, () => {
  console.log("It is Ok");
});
