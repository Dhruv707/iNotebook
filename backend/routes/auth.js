const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  obj = {
    a: "hello1",
    number: 34,
  };
  res.json(obj);
});

module.exports = router;
