const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function captureScreenshot() {
  let browser;
  
  try {
    console.log('Launching browser...');
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu'
      ]
    });

    const page = await browser.newPage();
    
    // Set viewport to a common desktop resolution
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1
    });

    console.log('Navigating to http://localhost:3000...');
    
    // Navigate to the page with a timeout
    await page.goto('http://localhost:3000', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    console.log('Page loaded successfully!');

    // Wait a bit more for any animations or dynamic content
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Create screenshots directory if it doesn't exist
    const screenshotDir = path.join(__dirname, 'screenshots');
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir);
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const screenshotPath = path.join(screenshotDir, `landing-page-${timestamp}.png`);

    console.log('Capturing full page screenshot...');
    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
      type: 'png'
    });

    console.log(`Screenshot saved successfully at: ${screenshotPath}`);
    return screenshotPath;

  } catch (error) {
    console.error('Error capturing screenshot:', error);
    
    if (error.message.includes('net::ERR_CONNECTION_REFUSED')) {
      console.log('\nIt looks like the server is not running on localhost:3000.');
      console.log('Please make sure your development server is started with: npm run dev');
    }
    
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the screenshot capture
captureScreenshot()
  .then((screenshotPath) => {
    console.log('\n✅ Screenshot capture completed successfully!');
    console.log(`📸 Screenshot location: ${screenshotPath}`);
  })
  .catch((error) => {
    console.error('\n❌ Screenshot capture failed:', error.message);
    process.exit(1);
  });