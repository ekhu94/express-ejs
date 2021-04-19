const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")));

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/rand", (req, res) => {
  const rand = Math.floor(Math.random() * 100) + 1;
  res.render("random", { rand, title: "Random Number" });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.render("subreddit", { subreddit, title: subreddit });
});

app.get("/yakuza", (req, res) => {
  const lieutenants = ["Daisaku Kuze", "Awano Hiroki", "Shibusawa Keiji"];
  res.render("yakuza", { lieutenants, title: "Yakuza" });
});

// const express = require("express");
// const app = express();
// const path = require("path");

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

// app.use(express.static(path.join(__dirname, "public")));

// app.listen(3000, () => {
//   console.log("Listening on Port 3000");
// });

// app.get("/", (req, res) => {
//   res.render("index", { title: "Home" });
// });

// app.get("/rand", (req, res) => {
//   const rand = Math.floor(Math.random() * 100) + 1;
//   res.render("random", { rand, title: "Random Number" });
// });

// app.get("/r/:subreddit", (req, res) => {
//   const { subreddit } = req.params;
//   res.render("subreddit", { subreddit, title: subreddit });
// });

// app.get("/yakuza", (req, res) => {
//   const lieutenants = ["Daisaku Kuze", "Awano Hiroki", "Shibusawa Keiji"];
//   res.render("yakuza", { title: "Yakuza", lieutenants });
// });
