#! /usr/bin/env node

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const time = new Date().getTime();
  const message = process.env.MESSAGE || "Hello, world";
  const headers = req.headers;
  res.json({
    time,
    message,
    headers
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on http://127.0.0.1:${PORT}`);
});
