const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const imagesDir = path.join(publicDir, 'images');

async function optimizeImages() {
  console.log('🎨 Starting image optimization...\n');

  // Convert ExpertCourse.png to WebP
  console.log('Converting ExpertCourse.png to WebP...');
  await sharp(path.join(imagesDir, 'ExpertCourse.png'))
    .webp({ quality: 90 })
    .toFile(path.join(imagesDir, 'ExpertCourse.webp'));
  console.log('✅ ExpertCourse.webp created\n');

  // Convert ExCo.png to WebP
  console.log('Converting ExCo.png to WebP...');
  await sharp(path.join(imagesDir, 'ExCo.png'))
    .webp({ quality: 90 })
    .toFile(path.join(imagesDir, 'ExCo.webp'));
  console.log('✅ ExCo.webp created\n');

  // Generate favicon from ExCo.png (smaller logo)
  console.log('Generating favicon.ico (32x32)...');
  await sharp(path.join(imagesDir, 'ExCo.png'))
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('✅ favicon-32x32.png created\n');

  // Generate larger favicon
  console.log('Generating favicon-16x16.png...');
  await sharp(path.join(imagesDir, 'ExCo.png'))
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('✅ favicon-16x16.png created\n');

  // Generate Apple Touch Icon (180x180)
  console.log('Generating apple-touch-icon.png (180x180)...');
  await sharp(path.join(imagesDir, 'ExCo.png'))
    .resize(180, 180, { fit: 'contain', background: { r: 214, g: 0, b: 0, alpha: 1 } })
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✅ apple-touch-icon.png created\n');

  // Generate Android Chrome icons
  console.log('Generating android-chrome-192x192.png...');
  await sharp(path.join(imagesDir, 'ExCo.png'))
    .resize(192, 192, { fit: 'contain', background: { r: 214, g: 0, b: 0, alpha: 1 } })
    .toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  console.log('✅ android-chrome-192x192.png created\n');

  console.log('Generating android-chrome-512x512.png...');
  await sharp(path.join(imagesDir, 'ExCo.png'))
    .resize(512, 512, { fit: 'contain', background: { r: 214, g: 0, b: 0, alpha: 1 } })
    .toFile(path.join(publicDir, 'android-chrome-512x512.png'));
  console.log('✅ android-chrome-512x512.png created\n');

  // Generate OG image with logo (1200x630)
  console.log('Generating og-image.png (1200x630)...');
  
  // Create a canvas with gradient background
  const ogCanvas = sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 214, g: 0, b: 0, alpha: 1 }
    }
  });

  // Resize logo for OG image
  const logoBuffer = await sharp(path.join(imagesDir, 'ExpertCourse.png'))
    .resize(600, null, { fit: 'contain' })
    .toBuffer();

  await ogCanvas
    .composite([
      {
        input: logoBuffer,
        gravity: 'center'
      }
    ])
    .png()
    .toFile(path.join(imagesDir, 'og-image.png'));
  
  console.log('✅ og-image.png created\n');

  console.log('🎉 All images optimized successfully!');
}

optimizeImages().catch(console.error);
