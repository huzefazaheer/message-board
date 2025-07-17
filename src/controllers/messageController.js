const { getMessages, getMessageById } = require("../models/db");

async function messageGet(req, res) {
    const msgs = await getMessages()
    res.render("index", {messages: msgs})
}

async function messageDetailGet(req, res) {
    const {id} = req.params
    const msg = await getMessageById(id)
    res.render('messagedetail', {msg:msg})
}

module.exports = {messageGet, messageDetailGet}