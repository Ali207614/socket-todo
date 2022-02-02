const host = require("./lib/getIp.js")({internal : false})
const PORT = process.env.PORT || 3000



module.exports = { host , PORT }