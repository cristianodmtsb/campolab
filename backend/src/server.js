require("./database");
const routes = require("./routes");
const port = 3003;

const express = require("express");
const server = express();

server.use(express.json());

server.use(routes);

server.listen(port, function () {
  console.log(`listening on port: http://localhost:${port}`);
});
