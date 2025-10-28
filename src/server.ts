import http from 'http'

const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {

    switch (request.url) {
        case "/":
            response.writeHead(200, { "Content-type": "text/html" })
            response.end('<h1>Home</h1>')
            break
        case "/about":
            response.writeHead(200, { "Content-type": "text/html" })
            response.end('<h1>About</h1>')
            break
        case "/my-account":
            response.writeHead(403, { "Content-type": "text/plain" })
            response.end('You have no access to this page')
            break
        default:
            response.writeHead(404, { "Content-type": "text/plain" })
            response.end('Page not found')
            break
    }
})

const PORT = 3000

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
})