//express
const express = require("express");
const app = express();


let port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use((req, res) => {
  console.log("request received");
  res.send(
   "<h1> Fruits </h1> <ul> <li> Apple </li> <li> Banana </li> <li> Orange </li> </ul>"
  );
});
 