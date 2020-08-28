const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:5500/pageeditor.html", {
    waitUntil: "networkidle2",
  });
  const element = await page.$("#editorjs");
  await element.screenshot({ path: "preview.png" });
  await browser.close();
})();
