const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render("home.ejs");
});

app.get('/about', (req, res) => {
  res.send("about.ejs");
});

app.get('/rolldice', (req, res) => {
  let random = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs",{num: random});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

