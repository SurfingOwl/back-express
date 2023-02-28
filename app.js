import './env.js'

import express from 'express'
import bodyParser from 'body-parser'

import router from './routes/api.js'

const app = express()

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use(router)

// Start the app
const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('listening on port', port)
})