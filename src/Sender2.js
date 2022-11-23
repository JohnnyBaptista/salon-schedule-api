const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

class Sender {
  constructor() {
    this.start();
  }
  qr = null;
  isAuth = false;

  start() {
    this.wp_client = new Client({
      authStrategy: new LocalAuth({ clientId: "client-mercedes" }),
    });

    this.wp_client.on("qr", (qr) => {
      if (this.isAuth) {
        return;
      }
      this.qr = qr;
    });

    this.wp_client.on("authenticated", (session) => {
      console.log({ session });
      // Save the session object however you prefer.
      // Convert it to json, save it to a file, store it in a database...
    });

    this.wp_client.on("ready", () => {
      console.log("============= Client connected and ready! ==============");
      this.isAuth = true;
      this.wp_client.setDisplayName("Mercedes HairStudio");
    });

    this.wp_client.on("disconnected", () => {
      this.isAuth = false;
      this.wp_client.emit("qr");
    });

    this.wp_client.initialize();
  }

  getQr() {
    return this.qr;
  }

  getIsAuth() {
    return this.isAuth;
  }
}

module.exports = Sender;

