const express = require("express")
const app = express()
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer)
const { PORT , host } = require("./config.js")

const readHandler = require("./socketHandlers/read.js")
const writeHandler = require("./socketHandlers/write.js")
const deleteHandler = require("./socketHandlers/delete.js")
const updateHandler = require("./socketHandlers/update.js")


io.on('connection', (socket) => {
	readHandler(io, socket)
	writeHandler(io , socket)
	deleteHandler(io,socket)
	updateHandler(io,socket)
})

httpServer.listen(PORT, () => console.log('Server is running http://' + host + ':' + PORT))