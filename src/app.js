const express = require("express")
const path = require("path")
const app = express()

const PORT = 8080

const publicPath = path.join(__dirname, "public")
app.use(express.static(publicPath))

const viewsPath = path.join(__dirname, "views")
app.set("views", viewsPath)
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render('index')
})

app.get("/new", (req, res) => {
    res.render('new')
})

app.listen(PORT, ()=>{
    console.log("Server started at port ", PORT)
})