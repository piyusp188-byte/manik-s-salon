import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const srcDir = 'C:\\Users\\Piyus Kumar Pradhan\\.gemini\\antigravity\\brain\\f793a923-a720-434e-8a18-452acca081aa';
const destDir = path.resolve('public/images/gallery');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mapping = [
  { file: 'bridal_makeup_1794072917882.jpg', out: 'bridal-makeup' },
  { file: 'party_makeup_1794072937450.jpg', out: 'party-makeup' },
  { file: 'bridal_mehndi_1794072958260.jpg', out: 'bridal-mehndi' },
  { file: 'arabic_mehndi_1794072978335.jpg', out: 'arabic-mehndi' },
  { file: 'hydra_facial_1794073003829.jpg', out: 'hydra-facial' },
  { file: 'skincare_therapy_clean_1794073061902.jpg', out: 'skincare-therapy' },
  { file: 'hair_spa_1794073088552.jpg', out: 'hair-spa' },
  { file: 'pedicure_1794073118150.jpg', out: 'pedicure' },
  { file: 'academy_makeup_1794073148862.jpg', out: 'academy-makeup' },
  { file: 'academy_mehndi_1794073181985.jpg', out: 'academy-mehndi' },
  { file: 'salon_interior_1794073225271.jpg', out: 'salon-interior' },
  { file: 'shade_matching_1794073405212.jpg', out: 'shade-matching' },
];

console.log('Processing gallery images...');

for (const item of mapping) {
  const src = path.join(srcDir, item.file);
  const outWebp = path.join(destDir, `${item.out}.webp`);
  const outJpg = path.join(destDir, `${item.out}.jpg`);

  if (!fs.existsSync(src)) {
    console.error(`Missing source file: ${src}`);
    continue;
  }

  // Copy full-size JPG
  fs.copyFileSync(src, outJpg);

  // Convert to optimized WebP (max 960px width, quality 85)
  try {
    const cmd = `ffmpeg -y -i "${src}" -vf "scale=min(iw\\,960):-2" -c:v libwebp -quality 85 "${outWebp}"`;
    execSync(cmd, { stdio: 'pipe' });
    const stat = fs.statSync(outWebp);
    console.log(`✓ Created ${item.out}.webp (${Math.round(stat.size / 1024)} KB)`);
  } catch (err) {
    console.warn(`WebP conversion failed for ${item.out}, using fallback copy.`);
    fs.copyFileSync(src, outWebp);
  }
}

console.log('Finished processing all gallery images.');

