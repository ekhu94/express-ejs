const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/random", (req, res) => {
  const rand = Math.floor(Math.random() * 100) + 1;
  res.render("random", { rand });
});
