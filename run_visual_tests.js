import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const files = ['sample_flow.html', 'sample_collide.html', 'sample_patterns.html'];

  for (const file of files) {
    const filePath = `file://${path.resolve(__dirname, 'tests_visual', file)}`;
    console.log(`Rendering ${file}...`);
    await page.goto(filePath);
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(__dirname, 'tests_visual', file.replace('.html', '.png')) });
  }

  await browser.close();
  console.log('Visual tests completed successfully.');
})();
