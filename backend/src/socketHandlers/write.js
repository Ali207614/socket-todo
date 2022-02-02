const { postTodo } = require("../modules/write/model.js")
const { getTodo } = require("../modules/read/model.js")

module.exports = async function (io, socket) {
	socket.on('todos:write', async (data) => {
        await postTodo(data)
        io.emit('todos:new' ,await getTodo())
    })
}