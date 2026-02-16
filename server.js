const http = require("http");


// creating a server
const server = http.createServer((req, res)=>{
    console.log(req);
    res.end("hello");
})

// listening server
server.listen(3000, ()=>{
    console.log("server running on port 3000");
})


