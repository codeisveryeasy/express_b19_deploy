let http = require('http')
let url = require('url')

let server = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type':'text/html'})
    console.log(request.url)
    let myquery = request.url
    console.log(url.parse(request.url).query)
    let parameter = url.parse(myquery, true).query
    let id = parameter.vid1
    response.write(`<h1>Id: ${id} </h1>`)
    response.write("<h2>Player</h2>")
    response.write(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)
    response.end()

}).listen(1234, ()=>{
    console.log("Listening on port 1234")
})