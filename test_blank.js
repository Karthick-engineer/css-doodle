import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  const file = 'tests_visual/sample_flow.html';
  const filePath = `file://${path.resolve(__dirname, file)}`;
  console.log(`Rendering ${filePath}...`);
  await page.goto(filePath);
  await page.waitForTimeout(2000);
  await browser.close();
})();
