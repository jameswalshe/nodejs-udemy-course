const express = require("express");
const bodyParser = require("");
const app = express();

app.use();

app.use("/", (req, res, next) => {
  res.send(
    "<form action='add' method='post'><input type='text'><button type='submit'>Send</button</form>"
  );
});

app.use("/add", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.listen(3000);
