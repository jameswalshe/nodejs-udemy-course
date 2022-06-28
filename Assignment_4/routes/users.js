// requires
const express = require("express");
const path = require("path");

// instantiate router
const router = express.Router();

// handle routes
router.use("/users", (req, res, next) => {
  res.render("addUser", { title: "Add Users Here" });
});

router.post("/userAdded", (req, res, next) => {
  res.render("userAdded", { title: "User Added", user: req.body.userAdded });
});

// exports
module.exports = router;
