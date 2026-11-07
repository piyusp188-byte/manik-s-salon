import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const newSource = 'salon_for_ladies_cleaned.mp4';
const heroSourceTarget = 'assets/video/source/hero-source.mp4';
const pubVideo = 'public/video';
const pubHero = 'public/images/hero';
const optDir = 'assets/video/optimized';

console.log('1. Updating master source video...');
fs.copyFileSync(newSource, heroSourceTarget);

console.log('2. Encoding desktop hero video (1080p)...');
// Desktop MP4
const deskMp4 = path.join(pubVideo, 'hero-desktop.mp4');
execSync(`ffmpeg -y -i "${newSource}" -vf "scale=1920:1080" -c:v libx264 -preset slow -crf 26 -an -movflags +faststart "${deskMp4}"`, { stdio: 'inherit' });

// Desktop WebM
const deskWebm = path.join(pubVideo, 'hero-desktop.webm');
execSync(`ffmpeg -y -i "${newSource}" -vf "scale=1920:1080" -c:v libvpx-vp9 -b:v 0 -crf 34 -an "${deskWebm}"`, { stdio: 'inherit' });

console.log('3. Encoding mobile hero video (540x676, x=750 crop for hair washing)...');
// Mobile MP4
const mobMp4 = path.join(pubVideo, 'hero-mobile.mp4');
execSync(`ffmpeg -y -i "${newSource}" -vf "crop=864:1080:750:0,scale=540:676:flags=lanczos,fps=20" -c:v libx264 -preset slow -crf 28 -an -movflags +faststart "${mobMp4}"`, { stdio: 'inherit' });

// Mobile WebM
const mobWebm = path.join(pubVideo, 'hero-mobile.webm');
execSync(`ffmpeg -y -i "${newSource}" -vf "crop=864:1080:750:0,scale=540:676:flags=lanczos,fps=20" -c:v libvpx-vp9 -b:v 0 -crf 38 -an "${mobWebm}"`, { stdio: 'inherit' });

console.log('4. Copying to assets/video/optimized...');
fs.copyFileSync(deskMp4, path.join(optDir, 'hero-desktop.mp4'));
fs.copyFileSync(deskWebm, path.join(optDir, 'hero-desktop.webm'));
fs.copyFileSync(mobMp4, path.join(optDir, 'hero-mobile.mp4'));
fs.copyFileSync(mobWebm, path.join(optDir, 'hero-mobile.webm'));

console.log('5. Generating fallback posters at 5s...');
// Desktop posters
const deskPosterJpg = path.join(pubHero, 'poster-desktop.jpg');
const deskPosterWebp = path.join(pubHero, 'poster-desktop.webp');
execSync(`ffmpeg -y -ss 00:00:05 -i "${newSource}" -vf "scale=1920:1080" -frames:v 1 -update 1 "${deskPosterJpg}"`, { stdio: 'inherit' });
execSync(`ffmpeg -y -ss 00:00:05 -i "${newSource}" -vf "scale=1920:1080" -c:v libwebp -quality 82 -frames:v 1 -update 1 "${deskPosterWebp}"`, { stdio: 'inherit' });

// Mobile posters
const mobPosterJpg = path.join(pubHero, 'poster-mobile.jpg');
const mobPosterWebp = path.join(pubHero, 'poster-mobile.webp');
execSync(`ffmpeg -y -ss 00:00:05 -i "${newSource}" -vf "crop=864:1080:750:0,scale=540:676:flags=lanczos" -frames:v 1 -update 1 "${mobPosterJpg}"`, { stdio: 'inherit' });
execSync(`ffmpeg -y -ss 00:00:05 -i "${newSource}" -vf "crop=864:1080:750:0,scale=540:676:flags=lanczos" -c:v libwebp -quality 82 -frames:v 1 -update 1 "${mobPosterWebp}"`, { stdio: 'inherit' });

console.log('File sizes:');
console.log(' - hero-desktop.mp4:', Math.round(fs.statSync(deskMp4).size / 1024), 'KB');
console.log(' - hero-desktop.webm:', Math.round(fs.statSync(deskWebm).size / 1024), 'KB');
console.log(' - hero-mobile.mp4:', Math.round(fs.statSync(mobMp4).size / 1024), 'KB');
console.log(' - hero-mobile.webm:', Math.round(fs.statSync(mobWebm).size / 1024), 'KB');
console.log('Finished updating all video assets successfully.');

