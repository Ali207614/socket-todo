const host = require("./lib/getIp.js")({internal : false})
const PORT = process.env.PORT || 5000

const pgConfig = {
	host: 'localhost',
	port: 5432,
	user:'postgres',
	password: '010203',
	database: 'todo_db'
}

module.exports = { host , PORT , pgConfig}