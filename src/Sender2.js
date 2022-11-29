const { Client, LocalAuth } = require("whatsapp-web.js");
const fs = require('fs');
// const qrcode = require("qrcode-terminal");

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
      // qrcode.generate(qr, { small: true });
      if (!!qr) {
        this.qr = qr;
      }
    });

    this.wp_client.on("ready", () => {
      console.log("============= Client connected and ready! ==============");
      this.isAuth = true;
      this.wp_client.setDisplayName("Mercedes HairStudio");
    });

    this.wp_client.on("disconnected", async (err) => {
      this.isAuth = false;
      if(err === 'NAVIGATION') {
        console.log("Client ended, restarting...")
        await this.wp_client.destroy();
        await this.wp_client.initialize();
        console.log("Client restarted!")
      }
    });

    this.wp_client.initialize();
  }

  async close() {
    this.wp_client.destroy();
  }

  getQr() {
    console.log({ qr: this.qr });
    return this.qr;
  }

  getIsAuth() {
    return this.isAuth;
  }
}

module.exports = Sender;

