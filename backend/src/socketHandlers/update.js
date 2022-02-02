const { updateTodo } = require("../modules/update/model.js")
const { getTodo } = require("../modules/read/model.js")

module.exports = async function (io, socket) {
	socket.on('todos:update', async ({todoId , text}) => {
        await updateTodo(todoId , text)
        io.emit('todos:new' ,await getTodo())
    })
}