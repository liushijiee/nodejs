//1.引入express
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则，监听get请求中的/这个路径的get请求，request是请求报文的封装，response是响应报文的封装
app.get('/',(request,response)=>{
    //request.query//默认为一个空对象
    
    response.send('hello')
});
app.get('/user/:id',(request,response)=>{
    
    //request.params//动态参数，例如http://127.0.0.1:8000/user/:id的id,默认是个空对象
    response.send(request.params.id)
});


// get 访问示例会匹配/app和其子集路径，如:http:127.0.0.1:3000/app 以及http:127.0.0.1:3000/app[/aa/bb...等等]都会匹配

// app.get('/app',(req, res, next) => {

//     //TODO SOMETHING...

// });

//4.监听端口启动服务
app.listen(8000,()=>{
    console.log('8000端口已经启动,监听中');
})