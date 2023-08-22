const express = require('express')
const cors = require("cors")
const json = require("json")
const app = express()

const route = require("./routes/routes.js")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/company", route)

app.listen(3000, function() {
    console.log("connected");
})