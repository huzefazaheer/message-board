const pool = require('./pool')

async function getMessages() {
  const { rows } = await pool.query('SELECT * FROM messages')
  return rows
}

async function getMessageById(id) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [
    id,
  ])
  return rows[0]
}

async function addMessage(text, name, added) {
  await pool.query(
    'INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)',
    [text, name, added],
  )
}

module.exports = { getMessages, getMessageById, addMessage }
