const puppeteer = require('puppeteer');
const fs = require('fs');

async function extractCookies() {
  const browser = await puppeteer.launch({ headless: false }); // login manually
  const page = await browser.newPage();
  await page.goto('https://www.youtube.com');

  console.log("✅ Please log in manually in the browser window...");

  await new Promise(resolve => setTimeout(resolve, 60000)); // wait 1 minute

  const cookies = await page.cookies();
  const netscapeCookies = cookies.map(c => 
    `${c.domain.startsWith('.') ? '.' : ''}${c.domain}\tTRUE\t/\t${c.secure ? 'TRUE' : 'FALSE'}\t0\t${c.name}\t${c.value}`
  ).join('\n');

  fs.writeFileSync('./cookies.txt', '# Netscape HTTP Cookie File\n' + netscapeCookies);
  console.log("✅ Cookies saved to cookies.txt");

  await browser.close();
}

module.exports = { extractCookies };
