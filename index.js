const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
  res.send("WhatsApp Attendance System is running!");
});

// WhatsApp Webhook placeholder
app.post("/webhook", (req, res) => {
  console.log("Webhook data:", req.body);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
