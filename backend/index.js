const express = require("express")
const app = express()
var bodyParser = require('body-parser')
const mongodb = require("./utility/database")
const UserController=require("./controllers/UserController")
const User = require("./models/userModel")
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongodb.connectServer(function (err, result) {
    app.listen(3000)
    app.get("/", function (req, res) {
        res.send("merhaba")
    })
    app.post("/login", UserController.getLogin)
    app.get("/getCity",UserController.sendCityData)
    app.post("/getRoutes",UserController.getRoutes)
    app.post("/test",UserController.deneme)
    app.post("/addRoute",UserController.addRoute)
    app.post("/chart",UserController.chart)
})
