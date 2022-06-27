const express = require("express");
const path = require("path");
const userRoutes = require("./routes/users.js");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(userRoutes);

app.listen(3000);
