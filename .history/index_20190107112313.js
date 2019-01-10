const express = require('express');

const app = new express();
var globalConfig = require('./config');
app.use(express.static('./page/'));
app.listen('12306',() => {
    console.log('It is Ok');
})
