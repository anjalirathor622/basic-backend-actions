const express = require('express')
const app = express()

app.post('/', function (req, res) {
  res.json({
    "msg":"anjali rathor",
    "data":req.query
  })
})
app.get('/a', function (req, res) {
  res.status(202).json({
    "msg":"how are you?",
    "data":req.query
  })
})

app.listen(5000)