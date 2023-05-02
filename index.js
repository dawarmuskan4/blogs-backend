//server instantiation
const express = require("express")
const app = express()

//port definition
require("dotenv").config()
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log("App is running")
})

//body parser middleware
app.use(express.json())

//routes
const blog= require("./routes/blog")

app.get('/api/v1', blog)

//db connection
const connectDb = require("./config/database")
connectDb()

//default route
app.get('/' ,(req, res) => {
  console.log("HOME PAGE")
})