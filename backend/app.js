const express = require("express");
const dotenv = require("dotenv");

const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

require("./src/config/sequelize");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

const port = process.env.PORT ? process.env.PORT : 5000;

app.listen(port, () => {
  // eslint-disable-next-line padded-blocks
  console.log(`Listening to Port: ${port}`);
});
