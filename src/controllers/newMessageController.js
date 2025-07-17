const { addMessage } = require("../models/db");

function formatDateToYYYYMMDD(date) {
  const year = date.getFullYear();
  // Month is 0-indexed, so add 1
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function newMessageGet(req, res){
    res.render('new');
}

function newMessagePost(req, res){
    addMessage(req.body.msg, req.body.name, formatDateToYYYYMMDD(new Date()))
    res.redirect("/")
}

module.exports = {
    newMessageGet, newMessagePost
}