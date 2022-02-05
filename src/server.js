const express = require('express')
const routes = require('./routes')
const path = require('path')

const app = express()
app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(routes)


app.listen(3000, () => {
    console.log(`server run in port ${3000}`)
})

