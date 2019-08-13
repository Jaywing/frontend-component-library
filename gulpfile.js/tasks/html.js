const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const projectPath = require("../lib/projectPath");

gulp.task("html", function() {
  paths = {
    src: [
      `./node_modules/giza-framework/html/**/*.html`,
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.html.src, "**/*.html"),
      "!" +
        projectPath(
          PATH_CONFIG.BASE,
          PATH_CONFIG.html.src,
          "**/{layouts,shared,macros,data}/**"
        )
    ],
    src_render: [
      projectPath(PATH_CONFIG.lab),
      `./node_modules/giza-framework/lab/html`,
      `./node_modules/giza-framework/html/components`,
      `./node_modules/giza-framework/html/content`,
      `./node_modules/giza-framework/html/layout`,
      projectPath(PATH_CONFIG.BASE, PATH_CONFIG.html.src)
    ],
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.buildSite)
  };

  return gulp
    .src(paths.src)
    .pipe(
      nunjucksRender({
        path: paths.src_render
      })
    )
    .pipe(gulp.dest(paths.dest));
});
