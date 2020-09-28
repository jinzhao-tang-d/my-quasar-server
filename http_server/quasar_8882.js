var express=require('express')
var app=express()
var fs=require('fs')
var bodyParser=require('body-parser')
var passport=require('passport-http')
// var User=require('./user')
const localPort=8882

// router().all('*',function (req,res,next){
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next()
// })
app.use(bodyParser.json());
//拦截所有请求
//extended:false using querystring to process
//extended:true  using qs to process
app.use(bodyParser.urlencoded({extended: false}));
app.use(function (req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Authorization', 'Basic');
    next()
})
app.post('/basic',(req,res) =>{
    console.log("req",req.body.username)
    // res.writeHead(200,{
    //     'Access-Control-Allow-Origin':'*',
    //     'Content-Type':'text/html',
    //     'Cache-Control':'max-age=10'
    // })
    var user={"username":req.body.username,"password":req.body.password,"msg":"login successfully!"}
    res.setHeader("Content-Type","application/json")
    res.end(JSON.stringify(user))
    }
)
app.get('/img',(req,res)=>{
    // res.writeFileSync("ico.jpg")
    res.setHeader("Content-Type","text/plain")
    res.setHeader("Cache-Control","max-age=60")
    // res.sendFile("ico.jpg");
    var img="https://placeimg.com/500/300/nature/1"
    res.end(img)
})
app.get('/change',(req,res)=>{
    res.writeHead(200,{
        'Access-Control-Allow-Origin':'*',
        'Content-Type':'text/html',
        'Cache-Control':'max-age=10'
    })
    res.end("data has changed")
})
var server=app.listen(localPort,()=>{
    // res.writeHead(200,{
    //     'Access-Control-Allow-Origin':'*',
    //     'Content-Type':'text/html',
    //     'Cache-Control':'max-age=10'
    // })
   var host=server.address().host
    var port=server.address().port
    console.log("listen address is  http://%s:%s",host,port)
})