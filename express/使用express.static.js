//1.引入express
const express = require('express');

//2.创建应用对象
const app = express();

app.use(express.static('../clock'))//可以访问到这个文件夹下的所有资源
app.use(express.static('../modules'))//此时有两个static，如果同时访问index.html，只会访问clock下的


//3.监听端口启动服务
app.listen(8000,()=>{
    console.log('8000端口已经启动,监听中');
})