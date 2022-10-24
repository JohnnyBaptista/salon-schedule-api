const express = require('express');
const venom = require ('venom-bot');
const routes = express.Router();

venom
    .create({headless:true})
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    })

routes.post('/send-message',async(req,res) => {
    const number = req.body.number;
    const message = req.body.message;
    client.sendText(number, message).then(response => {
        res.status(200).json({
            status: true,
            message:'menssagem enviada',
            response
        })
    })
} );



module.exports = routes;