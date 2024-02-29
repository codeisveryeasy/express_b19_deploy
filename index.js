let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
let tweet = require('./model/tweets')


//create express app
let app = express()

//configure cors
app.use(cors())

//configure express app to encode/decode json
app.use(express.json())

//connect to mongodb database
let dbstring = "mongodb+srv://mongodbuser:mongodbpassword@cluster0.nezoluq.mongodb.net/tweetdb"
mongoose.connect(dbstring)
let db = mongoose.connection

//check if db connection is success
db.on('open',()=>{
    console.log("Connected to mongodb in cloud!");
})

//create 1st api
app.get("/", (request, response)=>{
    console.log("api / called with GET")
    response.send("Welcome to Express API, GET")
})

//create 1st api
app.post("/", (request, response)=>{
    console.log("api / called with POST")
    response.send("Welcome to Express API, POST")
})

//get list of tweets from mongodb
app.get("/1.0/tweet/all", (request, response)=>{
    console.log("GET /1.0/tweet/all")
    //use model to get all tweets
    tweet.find({})
        .then((data)=>{
            console.log("query success for /1.0/tweet/all")
            response.json(data)
        })
        .catch((error)=>{
            console.log("query error for /1.0/tweet/all")
            response.json(error)
        })
})

//add document to mongodb
app.post("/1.0/tweet/add", (request, response)=>{
    console.log("POST /1.0/tweet/add")
    //extract request body from incoming request
    let rBody = request.body
    console.log(rBody)
    //create blank instance of tweet model
    let newTweet = new tweet({
        username:rBody.username,
        post:rBody.post,
        likes:rBody.likes,
        dislikes:rBody.dislikes,
        image:rBody.image,
        youtube:rBody.youtube
    })
    //save the model instance in database
    newTweet.save()
            .then((data)=>{
                console.log("query success for /1.0/tweet/add")
                response.json(data)
            })
            .catch((error)=>{
                console.log("query error for /1.0/tweet/add")
                response.json(error)
            })
})


//update document 
app.put("/1.0/tweet/update/:myid",(request, response)=>{
    console.log("PUT /1.0/tweet/update/:myid")
    let id = request.params.myid
    console.log(id)
    //extract request body from incoming request
    let rBody = request.body
    console.log(rBody)
    tweet.findByIdAndUpdate(id, rBody, {new:true})
            .then((data)=>{
                console.log("query success for /1.0/tweet/update/:id")
                response.json(data)
            })
            .catch((error)=>{
                console.log("query error for /1.0/tweet/update/id")
                response.json(error)
            })

})

//delete tweet by id
app.delete("/1.0/tweet/delete/:id", (request, response)=>{
    //extract id of the tweet to delete
    console.log("DELETE /1.0/tweet/delete/:id")
    let id = request.params.id
    console.log(id)
    tweet.findByIdAndDelete(id)
        .then(data=>{
            console.log("query success for /1.0/tweet/delete/:id")
            response.status(200).json(data)
        })
        .catch(error=>{
            console.log("query failure for /1.0/tweet/delete/:id")
            response.status(500).json(error)
        })
})


//find tweet by id
app.get("/1.0/tweet/:id",(request, response)=>{
    console.log("GET /1.0/tweet/:id")
    //extract id
    let id = request.params.id
    console.log(id)
    tweet.findById(id)
        .then(data=>{
            console.log("query success for /1.0/tweet/:id")
            response.status(200).json(data)
        })
        .catch(error=>{
            console.log("query failure for /1.0/tweet/:id")
            response.status(500).json(error)
        })

})


let PORT = 1234
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})