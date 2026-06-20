// Wallpaper manifest — edit this file to add/remove wallpapers or categories.
// This is loaded as a plain <script> tag (not fetched), so it works whether
// you open index.html directly by double-clicking it OR through a real
// server like GitHub Pages. No build step needed.
//
// To add a wallpaper:
//   1) put the image file in images/handheld/ or images/pc/
//   2) add a line below: { file: "filename.jpg", name: "Display name" }
//
// To add a whole new category (e.g. tablet):
//   1) create images/tablet/
//   2) add a new object to the categories array, same shape as the others
//   3) a new card appears on the home screen automatically

const WALLPAPER_MANIFEST = {
  categories: [
    {
      id: "handheld",
      label: "Mobile",
      folder: "images/handheld",
      images: [
        { file: "wall1.jpg", name: "Dusk Amber" },
        { file: "wall2.jpg", name: "Film Lilac" },
        { file: "wall3.jpg", name: "Paper Charcoal" },
        { file: "wall4.jpg", name: "Ember Roll" }
      ]
    },
    {
      id: "pc",
      label: "PC",
      folder: "images/pc",
      images: [
        { file: "wall1.jpg", name: "Dusk Amber" },
        { file: "wall2.jpg", name: "Film Lilac" },
        { file: "wall3.jpg", name: "Paper Charcoal" },
        { file: "wall4.jpg", name: "Ember Roll" }
      ]
    }
  ]
};
