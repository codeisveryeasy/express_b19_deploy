let fs = require('fs')

let message = `
                Good morning
                おはよう
                शुभ प्रभात
                Selamat pagi
                `

fs.writeFile("target.txt", message, (error)=>{
    if (error) {
        throw error
    }
    console.log("file write success")
})                