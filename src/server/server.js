const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

const viewsPath = path.join(__dirname, '/node/views')

app.use(express.static(viewsPath))

app.get('/', function (req, res) {
  res.sendFile(path + 'index.html')
})

app.use('/electricPoints', function (req, res) {
  res.json({
    blah: 'blah'
  })
})

module.exports = app
