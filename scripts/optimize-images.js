// scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function getImageFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getImageFiles(full));
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

async function optimizeImages(imagesDir) {
  const files = getImageFiles(imagesDir);
  console.log(`Optimizing ${files.length} images in ${imagesDir}`);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const tmp = file + '.tmp';
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(file).jpeg({ quality: 85, progressive: true }).toFile(tmp);
    } else {
      await sharp(file).png({ compressionLevel: 9 }).toFile(tmp);
    }
    fs.renameSync(tmp, file);
    console.log(`  optimized: ${path.relative(process.cwd(), file)}`);
  }
  console.log('Done.');
}

const target = process.argv[2] || path.join(process.cwd(), '_site', 'images');
optimizeImages(target).catch(err => { console.error(err); process.exit(1); });
