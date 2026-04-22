const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("Portfolio API Running");
});

// Contact API
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);
  res.send("Message received");
});

app.listen(5000, () => console.log("Server running on port 5000"));