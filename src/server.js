import express from "express";
import userRoutes from "./src/routes/userRoutes.js"; 

const app = express();
const PORT = 4000;

app.use(express.json()); // parse JSON bodies

app.use("/api/users", userRoutes);

app.get('/health', (req, res) => {
  res.json({ status: "Atreya Backend running" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:4000`);
});
