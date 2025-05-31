const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let urls = [
  { original: "http://example.com", short: "https://shortenb.com/abc123" }
]

app.get('/urls', (req, res) => {
  res.json(urls)
})

app.post('/generate', (req, res) => {
  let body = req.body
  console.log(body)
  urls.push({ 
    original: body.url, 
    short: "https://shortenb.com/" + new Date().getTime() 
  })
  res.json({ 
    date: new Date(), 
    short_url: urls[urls.length - 1].short 
  })
  // res.send({ short_url: "https://shortenb.io/abc123"})
})

app.listen(port, () => {
  console.log(`shortenb app listening on port ${port}`)
})
