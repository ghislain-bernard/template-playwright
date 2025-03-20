// ------------------------------------------- ghislain.bernard@gmail.com ------------------------------------------- //
import { chromium } from 'playwright';
//
(async () => {
  const browser = await chromium.launch();
  //
  const page = await browser.newPage({ viewport: { height: 768, width: 1024 } });
  page.on('request', (request) => {
    console.log(request.url());
  });
  //
  await page.goto('https://playwright.dev/');
  await page.screenshot({ fullPage: true, path: 'capture.png' });
  //
  await browser.close();
})();
// ------------------------------------------- ghislain.bernard@gmail.com ------------------------------------------- //
