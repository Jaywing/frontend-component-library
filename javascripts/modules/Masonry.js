const imagesLoaded = require("imagesloaded");
const masonryLayout = require("masonry-layout");

export default class Masonry {
  constructor(el) {
    this.el = el;
    const grid = this.el;

    imagesLoaded(grid, function() {
      const msnry = new masonryLayout(grid, {
        itemSelector: ".masonry__item",
        columnWidth: ".masonry__sizer",
        percentPosition: true
      });
    });
  }
}
