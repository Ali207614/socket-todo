const path = require("path")
const render = (htmlFile) => {
    return path.join(process.cwd(),'src' , 'public' , 'views' , htmlFile)
}

module.exports = render

