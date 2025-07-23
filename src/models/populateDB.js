#! /usr/bin/env node

const { Client } = require('pg')

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT,
  username VARCHAR ( 255 ),
  added DATE
);

INSERT INTO messages (text, username, added) 
VALUES
  ('Hello World', 'Afiy', '2025-07-17'),
  ('This is amazing', 'Afiys #1 Fan', '2025-07-20'),
  ('This straight garbage', 'Afiys #1 Hater', '2025-07-20');
`

async function main() {
  console.log('seeding...')
  const client = new Client({
    connectionString: process.env.DB,
  })
  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log('done')
}

main()
