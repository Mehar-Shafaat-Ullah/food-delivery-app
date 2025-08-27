const serverlessExpress = require('@vendia/serverless-express');
const express = require('express');
const next = require('next');

const app = next({ dev: false });
const handle = app.getRequestHandler();

let cachedHandler;

async function startServer() {
  await app.prepare();
  const expressApp = express();

  // Let Next.js handle all routes
  expressApp.all('*', (req, res) => {
    return handle(req, res);
  });

  return serverlessExpress({ app: expressApp });
}

exports.handler = async (event, context) => {
  if (!cachedHandler) {
    cachedHandler = await startServer();
  }
  return cachedHandler(event, context);
};
