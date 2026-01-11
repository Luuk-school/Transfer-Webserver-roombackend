const express = require("express");
const roomRoutes = require("./rooms/room");

const app = express();
app.use(express.json());

// Routes
app.use("/api/room", roomRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log("Room backend started");
