var http=require('http');
http.createServer(function(req,res)
{
    res.end("<h1>Welcome to Node JS</h1>");
}).listen(3000);
console.log("server is sending http://127.0.0.1:3000")