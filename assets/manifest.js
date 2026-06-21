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
        { file: "trainbias.jpg", name: "station" },
        { file: "vinny.jpg", name: "viny" },
        { file: "vinny2.jpg", name: "viny" },
        { file: "ph0.jpg", name: "ph0" },
        { file: "ph1.jpg", name: "ph1" },
        { file: "ph2.jpg", name: "ph2" },
        { file: "ph3.jpg", name: "ph3" },
        { file: "ph4.jpg", name: "ph4" },
        { file: "ph5.jpg", name: "ph5" },
        { file: "ph6.jpg", name: "ph6" },
        { file: "ph7.jpg", name: "ph7" },
        { file: "ph8.jpg", name: "ph8" },
        { file: "ph9.jpg", name: "ph9" },
        { file: "ph10.jpg", name: "ph10" },
        { file: "ph11.jpg", name: "ph11" },
        { file: "last of us.jpg", name: "last of us" },
        { file: "batman.jpg", name: "batman" },
        { file: "bmw.jpg", name: "bmw" },
        { file: "silversurfer.jpg", name: "silversurfer" },
        { file: "levi.jpg", name: "levi" },
        { file: "sunset.jpg", name: "city sunset" },
        { file: "snipermask.png", name: "snipermask" },
        { file: "lauren.jpg", name: "Lauren" },
        { file: "riverbutterfly.jpg", name: "riverfly" },
        { file: "shioon.jpg", name: "shioon" },
        { file: "biases.png", name: "baddies" },
        { file: "illustration.jpg", name: "illustration" },
        { file: "Jeonbreaker.jpg", name: "elder jeon" },
        { file: "hyacinth.jpg", name: "hyacinth" },
        { file: "purplehyacinth.jpg", name: "hyacinth" },
        { file: "lauren2.jpg", name: "lauren" }
      ]
    },
    {
      id: "pc",
      label: "PC",
      folder: "images/pc",
      images: [
        { file: "arkwork.jpg", name: "artwork" },
        { file: "hail-mary.jpg", name: "astronaut" },
        { file: "naohao.jpg", name: "nanhao" },
        { file: "roadillustration.jpg", name: "road" },
        { file: "aloo.jpg", name: "sain" },
        { file: "lotm.jpg", name: "lotm" },
        { file: "gumoonryong.jpg", name: "gumoonryong" }
      ]
    }
  ]
};
