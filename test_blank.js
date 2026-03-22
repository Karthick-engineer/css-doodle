import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const file = 'test_eval.html';
  const filePath = `file://${path.resolve(__dirname, file)}`;
  console.log(`Rendering ${filePath}...`);
  await page.goto(filePath);
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'test_eval.png' });
  await browser.close();
})();
