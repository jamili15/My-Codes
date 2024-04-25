var express = require('express');
var { MongoClient } = require('mongodb');
var cors = require("cors");
const multer = require('multer');

var app = express();
app.use(cors());

var CONNECTION_STRING = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.4"

var DATABASE_NAME = "queueingweb";
var database;

app.listen(5038, () => {
    MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if (error) {
            console.error("Error connecting to MongoDB:", error);
            return;
        }
        database = client.db(DATABASE_NAME);
        console.log("Mongo DB Connection Successful");
    });
});

app.get('/api/queueingweb/GetColors', (request, response) => {
    database.collection("queueingwebcollection").find({}).toArray((error, result) => {
        response.send(result)
    })
})

app.post('/api/queueingweb/AddColors', multer().none(), (request, response) => {
    database.collection("queueingwebcollection").count({}, function (error, numOfDocs) {
        database.collection("queueingwebcollection").insertOne({
            id: (numOfDocs + 1).toString(),
            hfcolor: request.body.newHfColors,
            maincolor: request.body.newMainColors,
            wincolor: request.body.newWinColors
        })
        response.json("Added Successfully")
    })
})

app.delete('/api/queueingweb/DeleteColors', (request, response) => {
    database.collection("queueingwebcollection").deleteOne({
        id: request.query.id
    })
    response.json("Deleted Successfully")
})