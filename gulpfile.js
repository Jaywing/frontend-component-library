const gulp = require("gulp");
const gulpif = require("gulp-if");
const gulpSequence = require("gulp-sequence");
const path = require("path");
const clean = require("del").sync;
const data = require("gulp-data");
const fs = require("fs");
const nunjucksRender = require("gulp-nunjucks-render");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const svgstore = require("gulp-svgstore");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const browser = require("browser-sync");
const port = process.env.SERVER_PORT || 3000;

const CONFIG = require("./config");

function projectPath(...paths) {
  return path.resolve(process.env.INIT_CWD, ...paths);
}

let production = false;

const html_paths = {
  src: [projectPath(CONFIG.BASE, CONFIG.html.src, '**/*.html'),
  '!' + projectPath(CONFIG.BASE, CONFIG.html.src, '**/{components,layouts,shared,macros,data}/**')
  ],
  src_render: [projectPath(CONFIG.BASE, CONFIG.html.src)],
  dest: projectPath(CONFIG.dest, CONFIG.site),
  dist: projectPath(CONFIG.dist)
};

const sass_paths = {
  src: projectPath(CONFIG.BASE, CONFIG.stylesheets.src, 'app.scss'),
  dest: projectPath(CONFIG.dest, CONFIG.stylesheets.dest),
  dist: projectPath(CONFIG.dist, CONFIG.stylesheets.dest)
};

const js_paths = {
  src: projectPath(CONFIG.BASE, CONFIG.javascripts.src, 'app.js'),
  dest: projectPath(CONFIG.dest, CONFIG.javascripts.dest),
  dist: projectPath(CONFIG.dist, CONFIG.javascripts.dest)
};

const images_paths = {
  src: projectPath(CONFIG.BASE, CONFIG.images.src, '**/*{jpg,png,svg}'),
  dest: projectPath(CONFIG.dest, CONFIG.images.dest),
  dist: projectPath(CONFIG.dist, CONFIG.images.dest)
};

const fonts_paths = {
  src: projectPath(CONFIG.BASE, CONFIG.fonts.src, '/**/*'),
  dest: projectPath(CONFIG.dest, CONFIG.fonts.dest),
  dist: projectPath(CONFIG.dist, CONFIG.fonts.dest)
};

const icons_paths = {
  src: projectPath(CONFIG.BASE, CONFIG.icons.src, '*.svg'),
  dest: projectPath(CONFIG.dest, CONFIG.icons.dest),
  dist: projectPath(CONFIG.dist, CONFIG.icons.dest)
};

const lab_html_paths = {
  src: [projectPath(
    CONFIG.lab, CONFIG.html.src, '**/*.html'), '!' + projectPath(CONFIG.lab, CONFIG.html.src, '**/{components,layouts,shared,macros,data}/**')],
  src_render: [projectPath(CONFIG.lab, CONFIG.html.src), `./node_modules/giza-lab/html`, projectPath(CONFIG.BASE, CONFIG.html.src)],
  dest: projectPath(CONFIG.dest),
  dist: projectPath(CONFIG.dist)
};

const lab_sass_paths = {
  src: projectPath(CONFIG.lab, CONFIG.stylesheets.src, 'lab.scss'),
  dest: projectPath(CONFIG.dest, CONFIG.stylesheets.dest),
  dist: projectPath(CONFIG.dist, CONFIG.stylesheets.dest)
};

const lab_js_paths = {
  src: [`./node_modules/giza-lab/dist/js/lab.js`],
  dest: projectPath(CONFIG.dest, CONFIG.javascripts.dest),
  dist: projectPath(CONFIG.dist, CONFIG.javascripts.dest)
};

var webpackConfig = {
  mode: "development",
  context: path.resolve("javascripts/"),
  entry: {
    app: ["babel-polyfill", "app.js"]
  },
  output: {
    path: path.resolve("_build/site/assets/js/"),
    filename: "app.js",
    publicPath: "/assets/javascripts/"
  },
  resolve: {
    modules: [path.resolve("javascripts/"), path.resolve("node_modules")]
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: path.resolve("node_modules")
        // query: {
        //   presets: [["es2015", { modules: false }], "stage-1"]
        // }
      }
    ]
  }
};

gulp.task("clean_build", function() {
  clean([CONFIG.dest]);
});

gulp.task("clean_dist", function() {
  clean([CONFIG.dist]);
});

gulp.task("html", function() {
  return gulp
    .src(html_paths.src)
    .pipe(nunjucksRender({ path: html_paths.src_render }))
    .pipe(gulpif(!production, gulp.dest(html_paths.dest)))
    .pipe(gulpif(production, gulp.dest(html_paths.dist)))
});

gulp.task("sass", function() {
  return gulp
    .src(sass_paths.src)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(
      sass({
        includePaths: ["node_modules", "scss"]
      }).on("error", sass.logError)
    )
    .pipe(
      postcss([
        autoprefixer({
          browsers: ["last 2 versions", "ie >= 9", "Android >= 2.3", "ios >= 7"]
        })
      ])
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulpif(!production, gulp.dest(sass_paths.dest)))
    .pipe(gulpif(production, gulp.dest(sass_paths.dist)));
});

gulp.task("javascript", function() {
  return gulp
    .src(js_paths.src)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulpif(!production, gulp.dest(js_paths.dest)))
    .pipe(gulpif(production, gulp.dest(js_paths.dist)));
});

gulp.task("images", function() {
  return gulp
    .src(images_paths.src)
    .pipe(gulpif(!production, gulp.dest(images_paths.dest)))
    .pipe(gulpif(production, gulp.dest(images_paths.dist)));
});

gulp.task("fonts", function() {
  return gulp
    .src(fonts_paths.src)
    .pipe(gulpif(!production, gulp.dest(fonts_paths.dest)))
    .pipe(gulpif(production, gulp.dest(fonts_paths.dist)));
});

gulp.task("icons", function() {
  return gulp
    .src(icons_paths.src)
    .pipe(svgstore())
    .pipe(gulpif(!production, gulp.dest(icons_paths.dest)))
    .pipe(gulpif(production, gulp.dest(icons_paths.dist)));
});

gulp.task("lab_html", function() {
  const dataFunction = function() {
    var dataPath = path.resolve(`${CONFIG.BASE}/lab/html/data/global.json`);
    return JSON.parse(fs.readFileSync(dataPath, "utf8"));
  };

  return gulp
    .src(lab_html_paths.src)
    .pipe(data(dataFunction))
    .pipe(nunjucksRender({ path: lab_html_paths.src_render }))
    .pipe(gulpif(!production, gulp.dest(lab_html_paths.dest)))
    .pipe(gulpif(production, gulp.dest(lab_html_paths.dist)))
});

gulp.task("lab_sass", function() {
  return gulp
    .src(lab_sass_paths.src)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(
      sass({
        includePaths: ["node_modules", "scss"]
      }).on("error", sass.logError)
    )
    .pipe(
      postcss([
        autoprefixer({
          browsers: ["last 2 versions", "ie >= 9", "Android >= 2.3", "ios >= 7"]
        })
      ])
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(lab_sass_paths.dest));
});

gulp.task("lab_js", function() {
  return gulp.src(lab_js_paths.src).pipe(gulp.dest(lab_js_paths.dest));
});

gulp.task("watch", function() {
  gulp.watch(`${CONFIG.BASE}/html/**/*`, ["html", browser.reload]);
  gulp.watch(`${CONFIG.BASE}/scss/**/*`, ["sass", browser.reload]);
  gulp.watch(`${CONFIG.BASE}/js/**/*`, ["javascript", browser.reload]);
  gulp.watch(`${CONFIG.BASE}/images/**/*`, ["images", browser.reload]);
  gulp.watch(`${CONFIG.BASE}/fonts/*`, ["fonts", browser.reload]);
  gulp.watch(`${CONFIG.BASE}/lab/html/**/*`, ["lab_html", browser.reload]);
  gulp.watch(`${CONFIG.BASE}/lab/scss/**/*`, ["lab_sass", browser.reload]);
});

gulp.task("serve", ["build"], function() {
  browser.init({ server: "./_build", port: port, open: false });
});

gulp.task("serve_dist", function(cb) {
  production = true;

  gulpSequence(
    "clean_dist",
    "sass",
    "html",
    "javascript",
    "images",
    "fonts",
    "icons",
    cb
  );
});

gulp.task("build", [
  "clean_build",
  "html",
  "sass",
  "javascript",
  "images",
  "fonts",
  "icons",
  "lab_html",
  "lab_sass",
  "lab_js"
]);

gulp.task("default", ["serve", "watch"]);

gulp.task("dist", ["serve_dist"]);
