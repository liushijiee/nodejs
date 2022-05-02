const express=require('express')
const app=express()


const router=require('./router1').router//module.exports对象中的router

app.use(router)

app.listen(8080,()=>{
    console.log('8080端口已开启');
})