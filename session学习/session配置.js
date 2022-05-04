const express=require('express')
const session=require('express-session')//导入session

const app=express()
app.use(//配置session
    session({//固定三个属性
        secret:'everything',//可以是任何
        resave:false,
        saveUninitialized:true
}))
