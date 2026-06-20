# Wallpaper Roll 🎞️

A simple personal wallpaper storage + viewer. The repo holds the actual image files; the deployed page is how you browse and grab them.

**[→ Open the gallery](https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/)**


Hi! This is my repository of wallpapers which I've collected over the years.

> Disclaimer: These wallpapers are sourced from many, many, many sources on the internet. I have *edited* several of them. Zero credit belongs to me in that regard, I'm simply the collector and editor. If you are the artist of one of these wallpapers, please [**contact me**], I will happily take the wallpaper down or add credit in this README.


## How it works

1. **Home** — two cards, **Mobile** and **PC**, each showing a small preview collage and a count of how many wallpapers are inside.
2. **Grid** — tap a card to see every wallpaper in that set as a thumbnail grid (tall thumbnails for Mobile, wide for PC).
3. **Viewer** — tap any thumbnail and it opens centered in a floating window, with the rest of the page blurred behind it.
   - **Download** button, bottom-left of the image
   - **◀ ▶** arrows on either side to move to the next/previous wallpaper without closing the viewer
   - Tap anywhere on the blurred background (or press `Esc`) to close

## Preview

**Mobile**

| | | | |
|---|---|---|---|
| ![wall1](images/handheld/wall1.jpg) | ![wall2](images/handheld/wall2.jpg) | ![wall3](images/handheld/wall3.jpg) | ![wall4](images/handheld/wall4.jpg) |

**PC**

| | |
|---|---|
| ![wall1](images/pc/wall1.jpg) | ![wall2](images/pc/wall2.jpg) |
| ![wall3](images/pc/wall3.jpg) | ![wall4](images/pc/wall4.jpg) |

## Adding a new wallpaper

1. Drop the image file into `images/handheld/` or `images/pc/`
2. Add an entry to the matching category in `assets/manifest.js`:
   ```js
   { file: "wall5.jpg", name: "Whatever you want to call it" }
   ```
3. Commit and push — GitHub Pages picks it up automatically. (Or just double-click `index.html` to preview locally — no server required.)

## Adding a new category

Add a new object to the `categories` array in `assets/manifest.js`:
```js
{
  id: "tablet",
  label: "Tablet",
  folder: "images/tablet",
  images: [
    { file: "wall1.jpg", name: "Example" }
  ]
}
```
Create the matching `images/tablet/` folder and a new card appears on the home screen automatically — no HTML/JS changes needed. Tall thumbnails are used for every category except the one with id `"pc"`; widen the rule in `script.js` (`openCategory`) if you want a third aspect ratio.

## Structure

```
images/
  handheld/             mobile wallpapers
  pc/                   desktop wallpapers
assets/manifest.js       categories + image list (plain JS, no fetch/server needed)
index.html              home / grid / lightbox markup
styles.css
script.js
```

## Local preview

Just double-click `index.html`, or open it in a browser directly — it doesn't need a server. (A real server is still required once it's deployed via GitHub Pages, but that's handled automatically.)

## Setup (one-time)

Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main**, folder **/ (root)**.

Your gallery URL will be `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.
