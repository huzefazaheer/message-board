const { validationResult, body } = require("express-validator");
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

const newMessagePost = [
    body("msg").notEmpty().withMessage("Please enter a message").trim()
    .isLength({max:150}).withMessage("Message can only be 150 words"),
    body("name").notEmpty().withMessage("Please enter your Name").trim()
    .isLength({max:35, min:2}).withMessage("Please enter a valid name"),

    function(req, res){
        const errors = validationResult(req)
        if(errors.isEmpty()){
            addMessage(req.body.msg, req.body.name, formatDateToYYYYMMDD(new Date()))
            res.redirect("/")   
        }else{
            console.log(errors.errors)
            res.render('new', {error: errors.errors[0]});
            return
        }
    }
]



module.exports = {
    newMessageGet, newMessagePost
}