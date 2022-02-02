const { getTodo } = require("../modules/read/model.js")
module.exports = async function (io, socket) {
	socket.emit('todos:read', await getTodo())
}