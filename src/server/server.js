const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

const viewsPath = path.join(__dirname, '/node/views')

app.use(express.static(viewsPath))

app.get('/', function (req, res) {
  res.sendFile(path + 'index.html')
})

app.use('/electricPoints', async function (req, res) {
  const response = await fetch('https://chargepoints.dft.gov.uk/api/retrieve/registry/post-town/london/limit/1000/format/json')
  const json = await response.json()
  res.json(json)
})

module.exports = app
