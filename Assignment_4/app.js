// requires
const express = require("express");
const users = require("./routes/users.js");
const bodyParser = require("body-parser");

// intantiate app
const app = express();

// set templating engine
app.set("view engine", "ejs");
app.set("views", "views");

// use routes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(users);

// listen on port
app.listen(3000);
