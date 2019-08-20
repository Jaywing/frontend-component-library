const gulp = require("gulp");
const browser = require("browser-sync");
const projectPath = require("../lib/projectPath");

gulp.task("watch", function() {
  paths = {
    htmlSrc: [
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.html.src, "**/*.html"),
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.html.src, "**/*.json")
    ],
    stylesheetsSrc: [
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.stylesheets.src, "**/*.scss")
    ],
    javascriptsSrc: [
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.javascripts.src, "**/*.js")
    ],
    imagesSrc: [
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.images.src, "**/*{jpg,png,svg}")
    ],
    iconsSrc: [projectPath(PATH_CONFIG.BASE, PATH_CONFIG.icons.src, "*.svg")]
  };

  gulp.watch(paths.htmlSrc, ["html", "lab:html", browser.reload]);
  gulp.watch(paths.stylesheetsSrc, ["stylesheets", browser.reload]);
  gulp.watch(paths.javascriptsSrc, ["webpack", browser.reload]);
  gulp.watch(paths.imagesSrc, ["images", browser.reload]);
  gulp.watch(paths.iconsSrc, ["icons", browser.reload]);
});
