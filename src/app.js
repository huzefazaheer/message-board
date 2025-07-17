const express = require("express")
const path = require("path")
const pool = require("./models/pool")
const { messageGet, messageDetailGet } = require("./controllers/messageController")
const { newMessageGet, newMessagePost } = require("./controllers/newMessageController")
const app = express()

const PORT = process.env.PORT || 8080

const publicPath = path.join(__dirname, "public")
app.use(express.static(publicPath))

const viewsPath = path.join(__dirname, "views")
app.set("views", viewsPath)
app.set("view engine", "ejs")

// Get form data in req.body
app.use(express.urlencoded({ extended: true }));

let freeId = 3

app.get("/", messageGet)

app.get("/new", newMessageGet)

app.post("/new", newMessagePost)

app.get("/:id", messageDetailGet)


app.listen(PORT, ()=>{
    console.log("Server started at port ", PORT)
})