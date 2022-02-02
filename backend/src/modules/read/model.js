const { fetch, fetchAll } = require("../../lib/postgres.js")

const GETTODO = `

select 
   *
from todos
`



const getTodo = async () => {
    let todo = await fetchAll(GETTODO)
    return todo
}



module.exports =  {
    getTodo
}
