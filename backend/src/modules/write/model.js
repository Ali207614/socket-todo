const { fetch, fetchAll } = require("../../lib/postgres.js")

const POSTTODO = `

INSERT INTO todos (todo_text) values ($1)
returning *
`



const postTodo = async ({text}) => {
    let todo = await fetchAll(POSTTODO , text)
    return todo
}



module.exports =  {
    postTodo
}
