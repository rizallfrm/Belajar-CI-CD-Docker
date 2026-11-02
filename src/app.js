const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello Sir!",
    status: "success",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

ap.get("/tes", (req,res) => {
  res.status(200).json({
    status: "tes success",
  });
})

module.exports = app;
