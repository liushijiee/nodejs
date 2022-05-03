const mysql = require('mysql')

//建立连接
const db = mysql.createPool({
    host: '127.0.0.1',//数据库ip地址
    user: 'root',//数据库账号
    password: '1234',
    database: 'mldn',//指定数据库
    port: 3306
})



// const user={username:'老7',password:'123'}

// //const sqlstr='INSERT INTO test(username,password) values (?,?)'//用?占位
// const sqlstr='INSERT INTO test SET ?'//简便写法

// db.query(sqlstr,user,(err,res)=>{//简便写法这里也要用user替换[user.username,user.password]

//     if(err){
//         return console.log(err.message);
//     }
//     if(res.affectedRows === 1){//影响了一行，说明插入成功了
//         console.log('插入成功');
//     }
// })//插入示例



// const user = { id: 5, username: 'newname', password: 123 }
// //const sqlstr = 'UPDATE test set username=?,password=? where id=?'
// const sqlstr='UPDATE test set ? where id=?'//简便写法
// db.query(sqlstr, [user,user.id], (err, res) => {//[user,user.id]简便写法
//     if (err) {
//         return console.log(err.message);
//     }
//     if (res.affectedRows === 1) {//影响了一行，说明插入成功了
//         console.log('修改成功');
//     }
// })//更新示例



// db.query('DELETE from test where id=?',6,(err, res) => {
//     if (err) {
//         return console.log(err.message);
//     }
//     if (res.affectedRows === 1) {//影响了一行，说明插入成功了
//         console.log('删除成功');
//     }
// })//删除示例




const sqlstr='UPDATE test set status=? where id=?'
db.query(sqlstr, [0,5], (err, res) => {//[user,user.id]简便写法
    if (err) {
        return console.log(err.message);
    }
    if (res.affectedRows === 1) {//影响了一行，说明插入成功了
        console.log('通过修改status标记删除成功');
    }
})//标记删除示例，通过改变status状态来判断是否删除，读取时候status=0不读取就行了



db.query('select * from test', (err, res) => {
    if (err) {
        return console.log(err.message);
    }
    console.log(res);
})//查询示例