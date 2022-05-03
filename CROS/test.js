const express=require('express')
const cors=require('cors')
const app=express()

app.use(cors())

const router=require('./router1').router//module.exports对象中的router

app.use(router)

app.listen(8080,()=>{
    console.log('8080端口已开启');
})