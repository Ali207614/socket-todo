const render = require("../../lib/render.js")

const HOME = (req,res) => {
    res.sendFile(render("index.html"))
}



module.exports = { HOME }