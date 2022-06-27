const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/viewUsers", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "viewUsers.html"));
});

router.get("/addUsers", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "addUser.html"));
});

module.exports = router;
