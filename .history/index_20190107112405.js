const express = require('express');

const app = new express();
var globalConfig = require('./config');


app.use(express.static(globalConfig.page_path));
app.listen(globalConfig.port, () => {
  console.log("It is Ok");
});
