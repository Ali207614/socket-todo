const { fetch, fetchAll } = require("../../lib/postgres.js")

const UPDATETODO = `
UPDATE todos
SET todo_text = $1
WHERE todo_id = $2;
`



const updateTodo = async (todoId , text) => {
    let todo = await fetchAll(UPDATETODO , text , todoId)
    return todo
}



module.exports =  {
    updateTodo
}
