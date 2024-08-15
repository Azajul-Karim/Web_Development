//express
const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.use((req, res) => {
//   console.log("request received");
//   res.send(
//    "<h1> Fruits </h1> <ul> <li> Apple </li> <li> Banana </li> <li> Orange </li> </ul>"
//   );
// });

app.get("/", (req, res) => {
  res.send(
    "<h1> Home </h1> <ul> <li> <a href='/animals'> Animals </a> </li> <li> <a href='/fruits'> Fruits </a> </li> <li> <a href='/vegetables'> Vegetables </a> </li> </ul>"
  );
}); 

app.get("/animals", (req, res) => {
  res.send(
    "<h1> Animals </h1> <ul> <li> Dog </li> <li> Cat </li> <li> Rabbit </li> </ul>"
  );
});

app.get("/fruits", (req, res) => {
  res.send(
    "<h1> Fruits </h1> <ul> <li> Apple </li> <li> Banana </li> <li> Orange </li> </ul>"
  );
});

app.get("/vegetables", (req, res) => {
  res.send(
    "<h1> Vegetables </h1> <ul> <li> Carrot </li> <li> Potato </li> <li> Onion </li> </ul>"
  );
});

app.get("*", (req, res) => {
  res.send("<h1> 404 Page Not Found </h1>");
});