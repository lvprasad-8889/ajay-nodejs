let express = require("express");

let miniApp = express.Router();

miniApp.get("/", (request, response) => {
    response.send({
        message : "A get request with empty path"
    })
})

miniApp.get("/ajay", (request, response) => {
    response.send({
        message: "A get request with path ajay"
    })
})

miniApp.get("/ajay/:id", (request, response) => {
    let rank = request.params.id
    response.send({
        message: `Ajay got ${rank} rank`
    })
})

module.exports = miniApp;