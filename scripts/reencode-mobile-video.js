import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const src = 'assets/video/source/hero-source.mp4';
const pubVideo = 'public/video';
const pubHero = 'public/images/hero';
const optDir = 'assets/video/optimized';

console.log('Re-encoding mobile video with x=750 to show hair washing...');

// 1. Mobile MP4 (x=750 crop, scale 540:676, 20 fps, CRF 28)
const cmdMp4 = `ffmpeg -y -i "${src}" -vf "crop=864:1080:750:0,scale=540:676:flags=lanczos,fps=20" -c:v libx264 -preset slow -crf 28 -an -movflags +faststart "${path.join(pubVideo, 'hero-mobile.mp4')}"`;
console.log('Encoding hero-mobile.mp4...');
execSync(cmdMp4, { stdio: 'inherit' });

// 2. Mobile WebM (VP9, CRF 38)
const cmdWebm = `ffmpeg -y -i "${src}" -vf "crop=864:1080:750:0,scale=540:676:flags=lanczos,fps=20" -c:v libvpx-vp9 -b:v 0 -crf 38 -an "${path.join(pubVideo, 'hero-mobile.webm')}"`;
console.log('Encoding hero-mobile.webm...');
execSync(cmdWebm, { stdio: 'inherit' });

// Copy to assets/video/optimized
fs.copyFileSync(path.join(pubVideo, 'hero-mobile.mp4'), path.join(optDir, 'hero-mobile.mp4'));
fs.copyFileSync(path.join(pubVideo, 'hero-mobile.webm'), path.join(optDir, 'hero-mobile.webm'));

// 3. Mobile Posters
const posterJpg = path.join(pubHero, 'poster-mobile.jpg');
const posterWebp = path.join(pubHero, 'poster-mobile.webp');
execSync(`ffmpeg -y -ss 00:00:07 -i "${src}" -vf "crop=864:1080:750:0,scale=540:676:flags=lanczos" -frames:v 1 -update 1 "${posterJpg}"`, { stdio: 'inherit' });
execSync(`ffmpeg -y -ss 00:00:07 -i "${src}" -vf "crop=864:1080:750:0,scale=540:676:flags=lanczos" -c:v libwebp -quality 82 -frames:v 1 -update 1 "${posterWebp}"`, { stdio: 'inherit' });

const mp4Size = Math.round(fs.statSync(path.join(pubVideo, 'hero-mobile.mp4')).size / 1024);
const webmSize = Math.round(fs.statSync(path.join(pubVideo, 'hero-mobile.webm')).size / 1024);
console.log(`✓ hero-mobile.mp4 size: ${mp4Size} KB`);
console.log(`✓ hero-mobile.webm size: ${webmSize} KB`);
console.log('Done!');

