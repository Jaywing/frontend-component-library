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
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const WebpackStrip = require("strip-loader");
const projectPath = require("../lib/projectPath");

gulp.task("lab:html", function() {
  paths = {
    src: [
      `./node_modules/giza-framework/lab/html/**/*.html`,
      projectPath(PATH_CONFIG.lab, PATH_CONFIG.html.src, "**/*.html"),
      "!" +
        projectPath(
          PATH_CONFIG.lab,
          PATH_CONFIG.html.src,
          "**/{layouts,shared,macros,data}/**"
        )
    ],
    src_render: [
      projectPath(PATH_CONFIG.lab, PATH_CONFIG.html.src),
      `./node_modules/giza-framework/lab/html`
    ],
    dest: projectPath(PATH_CONFIG.buildDest, PATH_CONFIG.buildLab)
  };

  const dataFunction = function() {
    var dataPath = path.resolve(
      `${PATH_CONFIG.BASE}/${PATH_CONFIG.lab}/${PATH_CONFIG.html.src}/_data.json`
    );
    return JSON.parse(fs.readFileSync(dataPath, "utf8"));
  };

  return gulp
    .src(paths.src)
    .pipe(data(dataFunction))
    .pipe(
      nunjucksRender({
        path: paths.src_render
      })
    )
    .pipe(gulp.dest(paths.dest));
});

gulp.task("lab:stylesheets", function() {
  paths = {
    src: projectPath(PATH_CONFIG.lab, PATH_CONFIG.stylesheets.src, "**/*.scss"),
    dest: projectPath(
      PATH_CONFIG.buildDest,
      PATH_CONFIG.buildLab,
      PATH_CONFIG.stylesheets.dest
    )
  };

  return gulp
    .src(paths.src)
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
    .pipe(gulp.dest(paths.dest));
});

const labWebpackConfig = {
  context: path.resolve(PATH_CONFIG.lab, PATH_CONFIG.javascripts.src),
  entry: {
    app: ["babel-polyfill", "./jaywing-lab.js"]
  },
  mode: "development",
  output: {
    path: path.resolve(PATH_CONFIG.lab, PATH_CONFIG.javascripts.src),
    filename: "jaywing-lab.js",
    publicPath: "/lab/javascripts/"
  },
  plugins: [],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(PATH_CONFIG.lab, PATH_CONFIG.javascripts.src),
      path.resolve(PATH_CONFIG.BASE, "node_modules")
    ]
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        exclude: path.resolve(PATH_CONFIG.BASE, "node_modules"),
        query: {
          presets: [["es2015", { modules: false }], "stage-1", "react-app"]
        }
      }
    ]
  }
};

const labWebpackConfig_production = {
  context: path.resolve(PATH_CONFIG.lab, PATH_CONFIG.javascripts.src),
  entry: {
    app: ["babel-polyfill", "./jaywing-lab.js"]
  },
  mode: "production",
  output: {
    path: path.resolve(PATH_CONFIG.lab, PATH_CONFIG.javascripts.src),
    filename: "jaywing-lab.js",
    publicPath: "javascripts/"
  },
  plugins: [],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(PATH_CONFIG.lab, PATH_CONFIG.javascripts.src),
      path.resolve(PATH_CONFIG.BASE, "node_modules")
    ]
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: path.resolve(PATH_CONFIG.BASE, "node_modules"),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["es2015", { modules: false }], "stage-1", "react-app"]
            }
          },
          {
            loader: WebpackStrip.loader("debug", "console.log")
          }
        ]
      }
    ]
  }
};

gulp.task("lab:javascripts", function() {
  labPaths = {
    src: projectPath(PATH_CONFIG.lab, PATH_CONFIG.javascripts.src, "**/*.js"),
    dest: projectPath(
      PATH_CONFIG.buildDest,
      PATH_CONFIG.buildLab,
      PATH_CONFIG.javascripts.dest
    )
  };

  return gulp
    .src(labPaths.src)
    .pipe(gulpif(!production, webpackStream(labWebpackConfig, webpack)))
    .pipe(
      gulpif(production, webpackStream(labWebpackConfig_production, webpack))
    )
    .pipe(gulp.dest(labPaths.dest));
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
