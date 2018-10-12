const express = require('express')
const path = require('path')
const app = express()
const port = 5000

app.use(express.static('./build'))

app.get('/', (req, res) => res.sendfile('index.html',  {root: './build'}))

app.listen(port, () => console.log(`Example app listening on port ${5000}!`))