//model

let mongoose = require('mongoose')

//setup schema
let tweetschema = mongoose.Schema

//setup collection mapping
let tweetscollection = new tweetschema({
    "username":String,
    "post":String,
    "likes":Number,
    "dislikes":Number,
    "image":String,
    "youtube":String
},{
    collection:"tweets"
})

//export
module.exports = mongoose.model('tweetmodel', tweetscollection)