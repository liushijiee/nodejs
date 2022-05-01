const http=require('http')
const fs=require('fs')
const path=require('path')

const server=http.createServer()
server.on('request',(req,res)=>{
    console.log('有人访问服务器');
    const url=req.url
    let fpath=''//路径优化
    if(url=='/'){
         fpath=path.join(__dirname,'./clock/index.html')//路径优化
    }else{
         fpath=path.join(__dirname,'./clock',url)//路径优化
    }
    
    
    
    fs.readFile(fpath,'utf8',(err,dataStr)=>{//读到的文件路径下的文件作为dataStr返回给浏览器
        if(err){
            return res.end('404 Not Found')
        }
        res.end(dataStr)
    })
})
server.listen(8080,()=>{
    console.log('http://127.0.0.1:8080/');
})
