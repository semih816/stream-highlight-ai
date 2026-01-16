const express = require("express");
const app = express();

app.use(express.json());

app.post("/create-job", (req, res) => {
  res.json({ status: "job created" });
});

app.listen(3001, () => {
  console.log("API running");
});