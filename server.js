const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config();
const routes = require("./src/routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", routes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
