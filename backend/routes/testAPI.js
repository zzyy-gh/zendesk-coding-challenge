// test API
var express = require("express");
var router = express();

router.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

module.exports = router;
