const serverless = require("serverless-http");
const next = require("next");
const express = require("express");

const app = next({ dev: false });
const handle = app.getRequestHandler();

let server;

async function createServer() {
  if (!server) {
    await app.prepare();
    const expressApp = express();
    expressApp.all("*", (req, res) => handle(req, res));
    server = serverless(expressApp);
  }
  return server;
}

exports.handler = async (event, context) => {
  const srv = await createServer();
  return srv(event, context);
};
