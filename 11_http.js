const http = require('http');

// createServer takes in a callback. Parameters can be 
// called anythinng but req & res are most common. 
// I used request and response for clarity
const server = http.createServer((request, response)=>{
    console.log(request);
    if(request.url === '/'){
        response.end('welcome to our home page');
    }
    if(request.url === '/about'){
        response.end('Here is our short history')
    }
    response.end(`<h1>OOPS!</h1><p>We can't seem to find the page you're looking for </p>
                    <a href="/">back home<a> `)
})

server.listen(5000);