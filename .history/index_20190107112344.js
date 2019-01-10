const express = require('express');

const app = new express();
var globalConfig = require('./config');


app.use(express.static('./page/'));
app.listen(globalConfig.port, () => {
  console.log("It is Ok");
});
