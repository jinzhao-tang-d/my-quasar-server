const http=require('http')
http.createServer(function (request,response){

    if(request.url==='/'){
        console.log("enther the 8881 button")
        response.writeHead(200,{
            'Access-Control-Allow-Origin':'*',
            'Content-Type':'text/html',
            'Cache-Control':'max-age=10'
        })
        response.end("data has changed")
    }
    // if(request.url==='/basic'){
    //     console.log("enter the 8881 login")
    //     response.writeHead(200,{
    //         'Access-Control-Allow-Origin':'*',
    //         'Content-Type':'text/html',
    //         'Cache-Control':'max-age=10'
    //     })
    //     // console.log("data:",reques)
    //     setTimeout(function (){
    //         console.log("data:",request.user)
    //     },1000)
    //
    //     // var password=request.password
    //     // if(username==="user"&&password==="pass")
    //     // {
    //     //     console.log("loged")
    //     //     response.writeHead(200,{
    //     //         'Access-Control-Allow-Origin':'*',
    //     //         'Content-Type':'text/html',
    //     //         'Cache-Control':'max-age=10'
    //     //     })
    //     //     response.end("login successful!")
    //     // }
    // }
}).listen(8882)