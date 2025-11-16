const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function capturePackagesSection() {
  let browser;
  
  try {
    console.log('Launching browser...');
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Set viewport
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });
    
    console.log('Navigating to http://localhost:3000...');
    await page.goto('http://localhost:3000', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    console.log('Page loaded successfully!');
    
    // Wait for packages section to be visible
    await page.waitForSelector('#packages', { timeout: 10000 });
    
    console.log('Finding packages section...');
    const element = await page.$('#packages');
    
    if (!element) {
      throw new Error('Packages section not found');
    }
    
    // Get the bounding box of the element
    const boundingBox = await element.boundingBox();
    
    if (!boundingBox) {
      throw new Error('Could not get bounding box for packages section');
    }
    
    console.log('Capturing packages section screenshot...');
    
    // Create screenshots directory if it doesn't exist
    const screenshotsDir = path.join(__dirname, 'screenshots');
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }
    
    // Generate filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `packages-section-${timestamp}.png`;
    const filepath = path.join(screenshotsDir, filename);
    
    // Take screenshot of the specific element with some padding
    await page.screenshot({
      path: filepath,
      clip: {
        x: Math.max(0, boundingBox.x - 20),
        y: Math.max(0, boundingBox.y - 30),
        width: Math.min(1920, boundingBox.width + 40),
        height: Math.min(boundingBox.height + 60, 2000)
      }
    });
    
    console.log(`Screenshot saved successfully at: ${filepath}`);
    console.log('\n✅ Packages section screenshot captured successfully!');
    console.log(`📸 Screenshot location: ${filepath}`);
    
  } catch (error) {
    console.error('❌ Error capturing screenshot:', error.message);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

capturePackagesSection();
