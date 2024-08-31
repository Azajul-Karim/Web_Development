const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "John",
    content: "i love to code",
  },
  {
    username: "Jane",
    content: "i love to play",
  },
  {
    username: "Rahi",
    content: "i love to sleep",
  },
  {
    username: "Nazim",
    content: "i love to eat",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  const { username, content } = req.body;
  posts.push({ username, content });
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
