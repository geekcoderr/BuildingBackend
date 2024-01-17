const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<button><a href="/dora">click me </button>')
})

app.get('/dora',(req,res) => {
    res.send('<p>Hello this is dora page</p>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})