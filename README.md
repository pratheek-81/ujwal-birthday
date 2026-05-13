# 🎉 Birthday Website for Ujwal Periketi 🎉

A beautiful, interactive birthday celebration website with animations, confetti effects, and memory galleries!

## Features ✨

- **Animated Hero Section** - Eye-catching welcome with bouncing letters and text animations
- **Interactive Confetti** - Click the celebration button to trigger confetti cannons
- **Memory Gallery** - Beautiful photo gallery with 4 image placeholders
- **Interactive Birthday Cake** - Click candles to blow them out and trigger celebrations
- **Birthday Wishes** - 6 personalized birthday wish cards
- **Timeline Section** - Why Ujwal is awesome! (5 awesome qualities)
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Modern Animations** - Smooth transitions and eye-catching effects throughout

## How to Add Your Photos 📸

1. Open the `images` folder in the project directory
2. Replace the following files with your photos:
   - `memory1.jpg` - First memory photo
   - `memory2.jpg` - Second memory photo
   - `memory3.jpg` - Third memory photo
   - `memory4.jpg` - Fourth memory photo

**Note:** If the image files don't exist, beautiful colored placeholder cards will appear automatically.

## How to Host on GitHub Pages 🚀

### Step 1: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon in the top right and select "New repository"
3. Name it `ujwal-birthday` (or any name you prefer)
4. Make it **Public** (important for GitHub Pages)
5. Don't initialize with README (you'll do it locally)
6. Click "Create repository"

### Step 2: Push Your Website to GitHub
Open PowerShell in this folder and run these commands:

```powershell
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Birthday website for Ujwal"

# Add remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/ujwal-birthday.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll down to **Pages** section (on the left sidebar)
4. Under "Build and deployment":
   - **Source** → Select "Deploy from a branch"
   - **Branch** → Select "main" and "/root"
5. Click **Save**
6. Wait a few seconds, then refresh the page

### Step 4: Get Your Live Link
1. In the Pages section, you'll see your live URL like:
   ```
   https://USERNAME.github.io/ujwal-birthday/
   ```
2. Copy this link and send it to Ujwal! 🎉

**Your website will be live in 1-2 minutes!**

## Tips for the Perfect Birthday Gift 💝

1. **Add Personal Photos**: Replace the placeholder images with your favorite memories together
2. **Edit the Message**: Open `index.html` and modify the birthday message in the "A Special Message for You" section
3. **Custom Wishes**: You can edit the wishes in the "Birthday Wishes" section to make them even more personal
4. **Share the Link**: Send the GitHub Pages link to Ujwal - it's shareable with anyone!

## Customization Ideas 🎨

- Change the colors by editing the CSS variables in `style.css` `:root` section
- Add more memory cards by copying the `memory-card` div in `index.html`
- Modify the wishes to include inside jokes or personal touches
- Add background music (advanced - requires embedding music player)

## File Structure 📁

```
Birthday_website/
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # Interactive features and animations
├── README.md           # This file
└── images/             # Folder for photos
    ├── memory1.jpg
    ├── memory2.jpg
    ├── memory3.jpg
    └── memory4.jpg
```

## Troubleshooting 🔧

**Website doesn't load?**
- Check that GitHub Pages is enabled in Settings → Pages
- Make sure the branch is set to "main"
- Wait 2-3 minutes for GitHub Pages to build

**Photos not showing?**
- Ensure image files are in the `images` folder with correct names
- Try different image formats (.jpg, .png, .gif)
- Check that file names match exactly (lowercase)

**Want to update it later?**
```powershell
# Make changes, then run:
git add .
git commit -m "Updated photos"
git push
# Wait 1-2 minutes for changes to appear online
```

## Browser Compatibility ✅

- Chrome ✓
- Firefox ✓
- Safari ✓
- Edge ✓
- Mobile browsers ✓

---

**Made with ❤️ for Ujwal's Birthday**

Have fun and make it memorable! 🎊🎉🎈
