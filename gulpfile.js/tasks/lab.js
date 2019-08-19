const gulp = require("gulp");
const gulpif = require("gulp-if");
const data = require("gulp-data");
const path = require("path");
const fs = require("fs");
const nunjucksRender = require("gulp-nunjucks-render");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const projectPath = require("../lib/projectPath");

gulp.task("lab:html", function() {
  labHtmlPaths = {
    src: [
      `./node_modules/giza-framework/lab/html/**/*.html`,
      projectPath(PATH_CONFIG.lab, "**/*.html"),
      "!" + projectPath(PATH_CONFIG.lab, "**/{layouts,data}/**")
    ],
    src_render: [
      projectPath(PATH_CONFIG.lab),
      `./node_modules/giza-framework/lab/html`,
      `./node_modules/giza-framework/lab/html/layouts`,
      `./node_modules/giza-framework/lab/html/content`,
      `./node_modules/giza-framework/lab/html/components`,
      `./node_modules/giza-framework/lab/html/modules`
    ],
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.buildLab)
  };

  const dataFunction = function() {
    var dataPath = path.resolve(
      `${PATH_CONFIG.BASE}/${PATH_CONFIG.lab}/_data.json`
    );
    return JSON.parse(fs.readFileSync(dataPath, "utf8"));
  };

  return gulp
    .src(labHtmlPaths.src)
    .pipe(data(dataFunction))
    .pipe(
      nunjucksRender({
        path: labHtmlPaths.src_render
      })
    )
    .pipe(gulp.dest(labHtmlPaths.dest));
});

gulp.task("lab:stylesheets", function() {
  labStylesheetsPaths = {
    src: projectPath(PATH_CONFIG.lab, PATH_CONFIG.stylesheets.src, "**/*.scss"),
    dest: projectPath(
      PATH_CONFIG.buildDest,
      PATH_CONFIG.buildLab,
      PATH_CONFIG.stylesheets.dest
    )
  };

  return gulp
    .src(labStylesheetsPaths.src)
    .pipe(gulpif(!production, sourcemaps.init()))
    .pipe(plumber())
    .pipe(
      sass({
        includePaths: ["node_modules", "scss"]
      }).on("error", sass.logError)
    )
    .pipe(
      postcss([
        autoprefixer({
          browsers: ["> 1%"]
        })
      ])
    )
    .pipe(gulpif(production, sass({ outputStyle: "compressed" })))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(labStylesheetsPaths.dest));
});

gulp.task("lab:javascripts", function() {
  labJsPaths = {
    src: projectPath(
      "./node_modules/giza-framework/dist/lab/javascripts/{*,*.*}.js"
    ),
    dest: projectPath(
      PATH_CONFIG.buildDest,
      PATH_CONFIG.buildLab,
      PATH_CONFIG.javascripts.dest
    )
  };

  return gulp.src(labJsPaths.src).pipe(gulp.dest(labJsPaths.dest));
});

gulp.task("lab:images", function() {
  labImagesPaths = {
    src: [
      projectPath(
        PATH_CONFIG.lab,
        PATH_CONFIG.images.src,
        "**/*{jpg,png,svg,mp4,webm}"
      )
    ],
    dest: projectPath(
      PATH_CONFIG.buildDest,
      PATH_CONFIG.buildLab,
      PATH_CONFIG.images.dest
    )
  };

  return gulp.src(labImagesPaths.src).pipe(gulp.dest(labImagesPaths.dest));
});
