const express=require('express');
const bodyParser=require('body-parser');
const shouyeRouter=require('./routes/首页.js');
//创建web服务器
var server=express();
server.listen(8080);
//托管静态资源到public目录下
server.use( express.static('public') );
//使用body-parser中间件
server.use( bodyParser.urlencoded({
  extended:false
}) );
server.use( '/首页',shouyeRouter );