const { log } = require("console")
let fs = require("fs")

fs.readFile("hello.txt", (error, data)=>{
    if (error) {
        throw error
    }
    console.log("file read success")
    console.log(data)
    console.log(data.toString())
})