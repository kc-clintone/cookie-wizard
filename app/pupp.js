const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

async function extractCookies() {
  const userDataDir = path.resolve(__dirname, "../data");

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    userDataDir,
  });

  const page = await browser.newPage();
  await page.goto("https://www.youtube.com");

  console.log("✅ Using saved Chrome profile for authentication...");

  const cookies = await page.cookies();
  const netscapeCookies = cookies
    .map(
      (c) =>
        `${c.domain.startsWith(".") ? "." : ""}${c.domain}\tTRUE\t/\t${
          c.secure ? "TRUE" : "FALSE"
        }\t0\t${c.name}\t${c.value}`
    )
    .join("\n");

  fs.writeFileSync(
    path.resolve(__dirname, "../cookies.txt"),
    "# Netscape HTTP Cookie File\n" + netscapeCookies
  );
  console.log("✅ Cookies saved to cookies.txt");

  await browser.close();
}

module.exports = { extractCookies };
