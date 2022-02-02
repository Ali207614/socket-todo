const { fetch, fetchAll } = require("../../lib/postgres.js")

const DELETETODO = `
DELETE FROM todos
WHERE todo_id = $1;
`



const deleteTodo = async (todoId) => {
    let todo = await fetchAll(DELETETODO , todoId)
    return todo
}



module.exports =  {
    deleteTodo
}
