const express = require('express')
const app = express()
const path = require("path")
const { PORT , host} = require('./config.js')

app.use( express.static( path.join(__dirname, 'public') ) )

const modules = require("./modules")
app.use(modules)

app.listen(PORT, () => console.log('Server is running http://' + host + ':' + PORT))