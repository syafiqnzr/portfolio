# Portfolio - Static HTML Export

This is a static HTML/CSS/JavaScript version of the portfolio website. No backend or database required!

## 📁 Folder Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styling
├── js/
│   └── script.js          # All JavaScript functionality
├── images/                # All images (copy from Laravel public/images)
│   ├── logo.png
│   ├── profile.jpg
│   ├── project 1.png
│   ├── project 2.png
│   ├── project 3.png
│   ├── Universiti Tun Hussein Onn Malaysia.png
│   ├── Politeknik Mersing Johor.png
│   ├── company/
│   │   ├── company1.png
│   │   └── company2.png
│   ├── Certification/
│   │   ├── sijil1.png
│   │   ├── sijil2.png
│   │   ├── sijil3.png
│   │   └── sijil4.png
│   └── hobby-images/
│       ├── hobi-1.PNG
│       ├── hobi-2.PNG
│       ├── hobi-3.PNG
│       ├── hobi-4.PNG
│       ├── hobi-5.PNG
│       ├── hobi-6.PNG
│       ├── hobi-7.PNG
│       ├── hobi-8.PNG
│       └── hobi-9.PNG
├── pdfs/                  # All PDFs (copy from Laravel public/pdfs)
│   ├── sijil1.pdf
│   ├── sijil2.pdf
│   ├── sijil3.pdf
│   └── sijil4.pdf
├── favicon.ico            # Favicon (copy from Laravel public/favicon.ico)
└── README.md             # This file
```

## 🚀 How to Use

### Option 1: Local Testing
1. Copy all files to a folder
2. Copy images, pdfs, and favicon from Laravel `public/` folder
3. Open `index.html` in your browser
4. Done! ✅

### Option 2: Deploy to Web Server
1. Upload all files to your web server
2. Make sure folder structure is correct
3. Access via your domain
4. Done! ✅

### Option 3: GitHub Pages
1. Create a GitHub repository
2. Push all files to `main` branch
3. Enable GitHub Pages in repository settings
4. Access via `https://username.github.io/portfolio`
5. Done! ✅

### Option 4: Netlify
1. Connect GitHub repository to Netlify
2. Set build command: (leave empty)
3. Set publish directory: `.` (root)
4. Deploy!
5. Done! ✅

## 📋 What You Need to Copy from Laravel

From `c:\laravel-syafiq\syafiqq\public\`:

```bash
# Copy entire images folder
cp -r public/images/* portfolio/images/

# Copy entire pdfs folder
cp -r public/pdfs/* portfolio/pdfs/

# Copy favicon
cp public/favicon.ico portfolio/
```

## ✨ Features

✅ **Bilingual Support** - Bahasa Melayu & English
✅ **Responsive Design** - Works on mobile, tablet, desktop
✅ **Tab Navigation** - Education, Work, Skills, Certifications
✅ **PDF Viewer** - View certificates in modal
✅ **Image Shuffle** - Hobby images shuffle every 5 seconds
✅ **Smooth Scrolling** - Smooth navigation
✅ **No Backend** - Pure static HTML/CSS/JS
✅ **No Database** - All content hardcoded
✅ **Fast Loading** - No server processing needed

## 🔧 Customization

### Change Content
Edit `index.html` directly:
- Update text in `<span class="lang-content ms">` for Bahasa Melayu
- Update text in `<span class="lang-content en">` for English

### Change Colors
Edit `css/style.css`:
- `.btn-orange` - Orange button color
- `.btn-red` - Red button color
- `.btn-cyan` - Cyan button color
- `body` - Background color
- `#222` - Text color

### Change Images
Replace files in `images/` folder with same names

### Change PDFs
Replace files in `pdfs/` folder with same names

## 📱 Browser Support

✅ Chrome
✅ Firefox
✅ Safari
✅ Edge
✅ Mobile browsers

## 🎯 Deployment Checklist

- [ ] Copy all images from Laravel
- [ ] Copy all PDFs from Laravel
- [ ] Copy favicon from Laravel
- [ ] Test all links work
- [ ] Test language toggle works
- [ ] Test PDF viewer works
- [ ] Test image shuffle works
- [ ] Test responsive design (mobile)
- [ ] Upload to web server
- [ ] Test on live domain

## 📞 Support

If something doesn't work:
1. Check browser console (F12) for errors
2. Make sure all images are in correct folders
3. Make sure all PDFs are in correct folders
4. Make sure favicon.ico is in root folder
5. Check file paths in HTML match your folder structure

## 📝 Notes

- This is a **static website** - no backend needed
- All content is **hardcoded** in HTML
- Images and PDFs must be in correct folders
- Works **offline** (except external links)
- Can be hosted **anywhere** (GitHub Pages, Netlify, traditional hosting, etc.)

---

**Created**: 2025-12-19
**Version**: 1.0
**Type**: Static HTML Export

