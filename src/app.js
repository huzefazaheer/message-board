const express = require("express")
const path = require("path")
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

const messages = [
  {
    id:1,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id:2,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


app.get("/", (req, res) => {
    res.render('index', {messages:messages})
})

app.get("/messages/:id", (req, res) => {
   res.render('messagedetail', {msg:messages[req.params.id-1]})
})

app.get("/new", (req, res) => {
    res.render('new')
})

app.post("/new", (req, res) => {
    messages.push({
        id:freeId,
        text: req.body.msg,
        user: req.body.name,
        added: new Date()
        })
    freeId++
    res.redirect("/")
})

app.listen(PORT, ()=>{
    console.log("Server started at port ", PORT)
})