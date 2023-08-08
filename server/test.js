const http = require('http')

const server = http.createServer((req,res) =>{
    res.end('hello server')
})

server.listen(2333,()=>{
    console.log('2333服务已经开启')
})