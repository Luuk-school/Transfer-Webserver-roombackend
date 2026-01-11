const express = require("express");
const router = express.Router();

// POST /api/room/create
router.post("/create", (req, res) => {
  // TODO: room aanmaken logic
  res.json({ success: true, message: "Room created" });
});

module.exports = router;
