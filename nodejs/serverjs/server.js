const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello')
})
app.get('/a', (req, res) => {
  res.send('Hello A')
})
app.get('/b', (req, res) => {
  res.send('Hello B')
})
app.get('/c', (req, res) => {
  res.send('Hello C')
})

app.get('/d', (req, res) => {
  res.send('Hello D')
})
app.get('/e', (req, res) => {
  res.send('Hello E')
})
app.get('/f', (req, res) => {
  res.send('Hello F')
})
app.get('/g', (req, res) => {
  res.send('Hello G')
})
app.get('/h', (req, res) => {
  res.send('Hello H')
})
app.get('/i', (req, res) => {
  res.send('Hello I')
})
app.get('/j', (req, res) => {
  res.send('Hello J')
})
app.get('/k', (req, res) => {
  res.send('Hello K')
})
app.get('/l', (req, res) => {
  res.send('Hello L')
})
app.get('/m', (req, res) => {
  res.send('Hello M')
})

app.get('/n', (req, res) => {
  res.send('Hello N')
})
app.get('/o', (req, res) => {
  res.send('Hello O')
})
app.get('/p', (req, res) => {
  res.send('Hello P')
})
app.get('/q', (req, res) => {
  res.send('Hello Q')
})
app.get('/r', (req, res) => {
  res.send('Hello R')
})
app.get('/s', (req, res) => {
  res.send('Hello S')
})
app.get('/t', (req, res) => {
  res.send('Hello T')
})
app.get('/u', (req, res) => {
  res.send('Hello U')
})
app.get('/v', (req, res) => {
  res.send('Hello V')
})
app.get('/w', (req, res) => {
  res.send('Hello W')
})
app.get('/x', (req, res) => {
  res.send('Hello X')
})
app.get('/y', (req, res) => {
  res.send('Hello Y')
})
app.get('/z', (req, res) => {
  res.send('Hello Z')
})
app.listen(5000)