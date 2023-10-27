// the http module is mainly used for setting up our webserving environment

const http = require('http'); 

//creating the server with the create server function in the http module which is stored in the http variable here . 
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end(`Welcome to the homepage`);
    } else if (req.url == '/about') {
        res.end("Hello This is the about page"); 
    }
    res.end(`
        <h1> OOps!!</h1>
        <p> Can't seem to find the page you are looking for </p>
        <a href="/">Back to home </a>
    `)
})

// as usual we would use a callback  function and take a request and a response .


server.listen(3000); // after the server is created we are telling our server which port it needs to listen to  using the .listen function 