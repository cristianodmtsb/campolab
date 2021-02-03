const routes = require("./routes");
const port = 3003;

const bodyParser = require("body-parser");
const express = require("express");
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(routes);

server.listen(port, function () {
  console.log(`listening on port: http://localhost:${port}`);
});