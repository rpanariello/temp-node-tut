const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url ==='/') {
        res.end('welcome to hompage')
    }
    if (req.url === '/about') {
        res.end('booobbdydyd')
    }
    res.end(
        `<h1>oops</h1>
        <p>we cant find paGE</p>
        <a href="/">home page</a>
        ` 
    )
})

server.listen(5000)