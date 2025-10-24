// src/middleware/authMiddleware.js
import admin from "../config/firebase.js";

export const verifyFirebaseToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Expect: "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded; // Attach user info to request
    next();
  } catch (error) {
    console.error("Firebase token verification failed:", error);
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

