import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import path from 'path'

import { Env, Conn } from './Config'
import { Cron } from './Services'
import Routes from './Routes'

const app = express()
app.use(bodyParser.json())
dotenv.config()

// Creating connection to MongoDB
Conn(mongoose, "", "", Env.DB_HOST, Env.DB_PORT, Env.DB_DATABASE)

// Routes
app.get('/', (req, res) => {
  return res.sendFile('index.html', {root: path.join(path.resolve('src'), "./Public")})
});

app.get('/u/:hash', (req, res) => {
  return res.sendFile('redir.html', {root: path.join(path.resolve('src'), "./Public")})
})

Routes(app);

// Creating a cron service to remove old urls
Cron("* * 24/3 * * *");

// Starting environment
const server = app.listen(process.env.APP_PORT, () => {
  console.log(`\r\n----------------------------------------------------------------\r\nSERVER: Listening on port ${process.env.APP_PORT}`)
})

export default server