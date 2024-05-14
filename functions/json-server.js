const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(require("../db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const handler = (req, res) => {
  server(req, res);
};

module.exports = { handler };
