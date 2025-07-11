const express = require('express');
const { extractCookies } = require('./pupp');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<a href="/extract">Click to extract cookies</a>');
});

app.get('/extract', async (req, res) => {
  try {
    await extractCookies();
    res.download('./cookies.txt');
  } catch (err) {
    res.status(500).send("Failed to extract cookies: " + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Running on http://localhost:${PORT}`);
});
