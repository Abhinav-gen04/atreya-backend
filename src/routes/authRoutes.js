// src/routes/authRoutes.js
const express = require("express");
const verifyFirebaseToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile", verifyFirebaseToken, (req, res) => {
  res.json({
    message: `Welcome ${req.user.email || "User"}`,
    uid: req.user.uid,
  });
});

module.exports = router;
