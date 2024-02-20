// const http = require('http');
// const port = 5004;
// const hostName = 'localhost';
//     const server = http.createServer(function(req,res){
//         res.statusCode = 200;
//         res.setHeader('content-text','text/plain')
//     res.end(`<h1>Hello! Node Js</h1>`)
// });

// server.listen(port,function(){
//     console.log(`Server running at ${hostName}: ${port}`);
// })


const { rmSync } = require('fs');
const http = require('http');
const { json } = require('stream/consumers');
const port = 50024
const hostName = 'localhost'

const server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.statusCode =200;
        res.setHeader('content-type','text/plain')
        res.end('Hello welcome to Home page.')
    }else if(req.url=='/about'){
        res.statusCode = 200;
        res.setHeader('content-type','text/plain')
        res.end('Hello! I am Mukesh.');
    }else if(req.url == '/contact'){
        res.statusCode = 200;
        res.setHeader('contect-type','text/plain')
        res.end('I am unknow person')
    }else if(req.url == '/product'){
        const options ={
                hostname:'fakestoreapi.com',
                path: '/products/1',
                method: 'GET'
            }
            const apiRes = http.request(options,(apiRes)=>{
                apiRes.on('data',(data)=>{
                res.statusCode = 200;
                res.setHeader('content-type','application/json');
                res.end(JSON.stringify(data.toString()))
                })
                apiRes.on('error',()=>{
                    console.log('error page');
                })
            })
            apiRes.end()

    }else{
        res.statusCode = 500;
        res.setHeader('content-type','text/plain')
        res.end('error page');
    }
})
    server.listen(port,function(){
        console.log(`server run port ${hostName}: ${port}`);
    })

// server.listen(port,function(){
//     console.log(`open server ${hostName}: ${port}`);
// })

// const http = require('http');
// const options ={
//     hostname:'fakestoreapi.com',
//     path: '/products/1',
//     method: 'GET'
// }
// const apiRes = http.request(options,(apiRes)=>{
//     apiRes.on('data',(data)=>{
//         console.log(data.toString())
//     })
// })
//     apiRes.on('error',()=>{
//         console.log(e);
//     })

// apiRes.end()