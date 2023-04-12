const express = require("express");
const dotenv = require("dotenv");

const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();
const routes = require("./src/routes");


require("./src/config/sequelize");
const app = express();
app.use(
  bodyParser.json()
  );
  
app.use(cors());

app.use('/api', routes);

const port = process.env.PORT ? process.env.PORT : 5000;

app.listen(port, () => {
  // eslint-disable-next-line padded-blocks
  console.log(`Listening to Port: ${port}`);
});
