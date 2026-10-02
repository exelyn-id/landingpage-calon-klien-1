const fs = require('fs');
const path = require('path');

const sourceProve = path.join(__dirname, 'prove');
const sourceTestimoni = path.join(__dirname, 'testimoni');
const logoFile = path.join(__dirname, 'logo.jpg');

const targetLogoDir = path.join(__dirname, 'public', 'images', 'logo');
const targetAchievementsDir = path.join(__dirname, 'public', 'images', 'achievements');
const targetTestimonialsDir = path.join(__dirname, 'public', 'images', 'testimonials');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

ensureDir(targetLogoDir);
ensureDir(targetAchievementsDir);
ensureDir(targetTestimonialsDir);

if (fs.existsSync(logoFile)) {
  fs.copyFileSync(logoFile, path.join(targetLogoDir, 'mathgenius-logo.jpg'));
  console.log('Logo copied.');
}

function copyFirstN(sourceDir, targetDir, prefix, n) {
  if (!fs.existsSync(sourceDir)) return;
  const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg') || f.endsWith('.webp'));
  for (let i = 0; i < Math.min(n, files.length); i++) {
    const ext = path.extname(files[i]);
    const targetName = `${prefix}-${String(i + 1).padStart(2, '0')}${ext}`;
    fs.copyFileSync(path.join(sourceDir, files[i]), path.join(targetDir, targetName));
  }
  console.log(`Copied ${Math.min(n, files.length)} files from ${sourceDir} to ${targetDir}`);
}

copyFirstN(sourceProve, targetAchievementsDir, 'achievement', 20);
copyFirstN(sourceTestimoni, targetTestimonialsDir, 'testimonial', 20);
