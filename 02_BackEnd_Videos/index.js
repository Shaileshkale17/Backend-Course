require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Welcome to the Express server");
});
app.get("/app", (req, res) => {
  res.send("Welcome to the Express server App");
});

app.listen(process.env.PORT, () => {
  console.log(`Express server listening on port ${process.env.PORT}`);
});
