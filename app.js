var express = require('express')
var app = express()
var router = express.Router()

var path = __dirname + '/views'
const PORT = 3000
const HOST = '0.0.0.0'

router.use((req, res, next) => {
    console.log('/' + req.method)
    next()
})

router.get('/', (req, res) => {
    res.sendFile(path + '/index.html')
})

router.get('/sharks', (req, res) => {
    res.sendFile(path + '/sharks.html')
})

app.use(express.static(path))
app.use('/', router)

app.listen(3000, () => {
    console.log(`App run on port ${PORT}`)
})