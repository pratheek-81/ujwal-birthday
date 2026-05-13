# Quick Setup Guide 🚀

## Add Your Photos (2 minutes) 📸

1. **Find your photos** - Select 4 favorite photos with Ujwal
2. **Rename them to:**
   - `memory1.jpg`
   - `memory2.jpg`
   - `memory3.jpg`
   - `memory4.jpg`

3. **Copy them to the `images` folder** in this project

That's it! The website automatically handles different photo sizes.

---

## Quick GitHub Pages Setup (5 minutes) 🌐

### Prerequisites

- GitHub account (create at [github.com](https://github.com) if needed)
- Git installed on your computer (download from [git-scm.com](https://git-scm.com))

### Step-by-Step:

1. **Open PowerShell in this folder** (right-click → "Open PowerShell here")

2. **Run these commands one by one:**

```powershell
# Setup git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Initialize project
git init
git add .
git commit -m "Ujwal's Birthday Website"
```

3. **Create GitHub Repository:**
   - Go to https://github.com/new
   - Name: `ujwal-birthday`
   - Make it **Public**
   - **Don't** click "Initialize"
   - Click "Create repository"

4. **Copy the commands from GitHub and paste them in PowerShell:**
   - They'll look like: `git remote add origin https://github.com/YOUR_USERNAME/ujwal-birthday.git`
   - Follow the push instructions

5. **Enable GitHub Pages:**
   - Go to your repo
   - Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Wait 2 minutes

6. **Get your link:**
   - Your site will be at: `https://YOUR_USERNAME.github.io/ujwal-birthday/`
   - Send this to Ujwal! 🎉

---

## After Uploading Photos 📤

If you made changes locally:

```powershell
git add .
git commit -m "Added photos"
git push
```

Wait 2-3 minutes for the website to update.

---

## Website Preview ✨

Your website includes:

- ✅ Animated "Happy Birthday" header
- ✅ Celebration button with confetti
- ✅ Photo gallery section
- ✅ Personalized birthday message
- ✅ 6 birthday wishes cards
- ✅ Interactive birthday cake (click candles to blow them out!)
- ✅ Timeline of why Ujwal is awesome
- ✅ Full responsive design (mobile-friendly)

---

## Need Help?

**Photos not showing?**

- Make sure filenames are exactly: `memory1.jpg`, `memory2.jpg`, `memory3.jpg`, `memory4.jpg`
- Check they're in the `images` folder
- Try .jpg, .png, or .webp formats

**GitHub Pages not showing?**

- Wait 2-3 minutes after pushing
- Check repository is Public
- Verify Pages settings: Source = Branch (main), Folder = /root
- Check there are no errors in the Actions tab

**Want to customize the text?**

- Edit `index.html` to change messages
- Edit `style.css` to change colors/fonts
- Edit `script.js` for advanced changes

---

**Made with ❤️ - Happy Birthday Ujwal!** 🎊
