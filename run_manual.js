import { chromium } from 'playwright';
import path from 'path';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(`
  <script src="file://${path.resolve('css-doodle.min.js')}"></script>
  <css-doodle>
    :doodle { @grid: 5x5; }
    background: red;
  </css-doodle>`);
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'test_manual.png' });
  await browser.close();
})();
