

const express = require('express')
const http = require('http')
var cors = require('cors')
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())
const axios = require('axios')
const URL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
const URL2 = (it) => `https://hacker-news.firebaseio.com/v0/item/${it}.json?print=pretty`




app.get('/api/v1/news', async (req, res) => {

  const result = await axios.get(URL)
  const news = result.data.sort((a, b) => b - a).slice(0, 100)

  res.json(news)
})

app.get('/api/v1/:id', async (req, res) => {
  const id = req.params.id
  const { data: result } = await axios.get(URL2(id))

  res.json(result)
})



const port = process.env.PORT || 8090

const server = http.createServer(app)


server.listen(port, () => console.log(`Listening on port ${port}...`))