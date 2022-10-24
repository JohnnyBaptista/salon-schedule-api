const express = require('express');
const venom = require ('venom-bot');
const routes = express.Router();

venom
    .create({headless:true})
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    })

    function start (client){
        console.log('verifica 1')
        routes.post('/send-message', async (req,res) => {
          
            const number = req.body.number;
            const message = req.body.message;
            console.log(message)
            client.sendText(number, message).then(response =>{
                res.status(200).json({
                    status: true,
                    message :'mensagem enviada',
                    response
                });
            }).catch(error => {
                console.log(error);
                res.status(500).json(error);
            }) 
        })
    }



module.exports = routes;