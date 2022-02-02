const router = require("express").Router()

const { HOME} = require("./controller.js") 

router.route("/")
        .get(HOME)
        


module.exports = router 