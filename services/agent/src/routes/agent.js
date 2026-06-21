const express = require("express");
const agent = require("../config/agent");

const router = express.Router();

router.get("/", (req, res) => {
    res.json(agent);
});

module.exports = router;