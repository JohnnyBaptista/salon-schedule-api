const express = require("express");
const users = require("./routes/users");
const brands = require("./routes/brands");
const products = require("./routes/products");
const worker = require("./routes/worker");
const client = require("./routes/client");
const job = require("./routes/job");
const Sender = require("./Sender2");

const sender = new Sender();

const routes = express.Router();

routes.use("/users", users);
routes.use("/brand", brands);
routes.use("/worker", worker);
routes.use("/client", client);
routes.use("/job", job);
routes.use("/products", products);

routes.get("/status", (req, res) => {
  const isAuth = sender.getIsAuth();
  let status;
  if (isAuth) {
    status = { isAuth };
  } else {
    const wp_client = sender.wp_client;
    wp_client.emit('qr');
    status = { qrCode: sender.getQr(), isAuth };
  }
  return res.status(200).send(status);
});

routes.post("/send-message", async (req, res) => {
  try {
    const wp_client = sender.wp_client;
    const { number, message } = req.body;
    console.log({number})
    const response = await wp_client.sendMessage(`55${number}@c.us`, message);
    return res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
});

module.exports = routes;
