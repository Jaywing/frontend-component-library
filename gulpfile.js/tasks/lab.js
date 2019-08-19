const gulp = require("gulp");
const projectPath = require("../lib/projectPath");

gulp.task("lab:javascripts", function() {
  labJsPaths = {
    src: projectPath(
      "./node_modules/giza-framework/dist/javascripts/{*,*.*}.js"
    ),
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.javascripts.dest)
  };

  return gulp.src(labJsPaths.src).pipe(gulp.dest(labJsPaths.dest));
});
