const { getTodo } = require("../modules/read/model.js")
const { deleteTodo } = require("../modules/delete/model.js")

module.exports = async function (io, socket) {
	socket.on('todos:delete', async ({todoId}) => {
        await deleteTodo(todoId)
        io.emit('todos:new' ,await getTodo())
    })
}