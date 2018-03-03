require('dotenv').config()

const server = require('./server')

server.listen('8000')
console.log('>>>  Server Works on http://localhost:8000/  <<<')
