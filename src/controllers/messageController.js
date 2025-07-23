const { getMessages, getMessageById } = require('../models/db')

function formatDateToYYYYMMDD(date) {
  const year = date.getFullYear()
  // Month is 0-indexed, so add 1
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  return `${year}-${month}-${day}`
}

async function messageGet(req, res) {
  const msgs = await getMessages()
  const fmsgs = msgs.map((msg) => ({
    ...msg, // Keep all other properties
    added: formatDateToYYYYMMDD(new Date(msg.added)), // Convert to Date object, then format
  }))
  res.render('index', { messages: fmsgs })
}

async function messageDetailGet(req, res) {
  const { id } = req.params
  const msg = await getMessageById(id)
  res.render('messagedetail', { msg: msg })
}

module.exports = { messageGet, messageDetailGet }
