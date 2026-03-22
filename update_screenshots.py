from playwright.sync_api import sync_playwright
import os

def capture():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        base_dir = os.path.abspath('tests_visual')

        for file in ['sample_flow.html', 'sample_collide.html', 'sample_patterns.html']:
            page.goto(f"file://{base_dir}/{file}")
            page.wait_for_timeout(2000)
            page.screenshot(path=f"{base_dir}/{file.replace('.html', '.png')}")

        browser.close()

if __name__ == "__main__":
    capture()
