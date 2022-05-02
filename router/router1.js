//1.导入express
const express=require('express')

//2.创建路由对象
const router=express.Router()

// 3.挂载路由
router.get('/user/list',(req,res)=>{
    res.send('get user list')
})

// 5.向外导出路由对象
module.exports={router}
