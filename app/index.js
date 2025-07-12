const express = require("express");
const fs = require("fs");
const path = require("path");
const { extractCookies } = require("./pupp");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send('<a href="/extract">Click to extract cookies</a>');
});

app.get("/cookies", (req, res) => {
  const cookiePath = path.resolve(__dirname, "../cookies.txt");
  if (!fs.existsSync(cookiePath)) {
    return res
      .status(404)
      .send("❌ Cookie file not found. Please visit /extract first.");
  }
  res.download(cookiePath);
});

app.get("/extract", async (req, res) => {
  try {
    await extractCookies();
    res.redirect("/cookies");
  } catch (err) {
    res.status(500).send("❌ Failed to extract cookies: " + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Running on http://localhost:${PORT}`);
});
