const { series, src, dest, watch } = require("gulp");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const inject = require("gulp-inject");
const sourcemaps = require("gulp-sourcemap");
const build = series(html, scripts, styles, vendorsJS, galleryCss);

function defaultTask(cb) {
  console.log("Gulp is running");
  cb();
}

function html() {
  console.log("building html");
  return src("./src/index.html")
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(dest("./dist/"));
}

function vendorsJS() {
  return src(["./node_modules/jquery/dist/jquery.js", "./node_modules/nanogallery2/dist/jquery.nanogallery2.js"])
    .pipe(sourcemaps.init())
    .pipe(concat("vendors.js"))
    .pipe(sourcemaps.write())
    .pipe(dest("./dist"));
}

// function injectAll() {
//   // const target = src("./src/index.html");
//   return src("./src/index.html")
//     .pipe(inject(src("**/all.js"), { base: "." }, { starttag: "<!-- inject:head:{{ext}} -->" }))
//     .pipe(dest("./dist"));
// }

function scripts() {
  console.log("building scripts");
  return src("./src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write())
    .pipe(dest("./dist"));
}

function watchFiles() {
  watch("./src/**/*.js", scripts);
  watch("./src/**/*.sass", styles);
}

function galleryCss() {
  return src(["./node_modules/nanogallery2/dist/css/nanogallery2.min.css", "./node_modules/nanogallery2/dist/css/nanogallery2.woff.min.css"]).pipe(
    dest("./dist")
  );
}

function styles() {
  console.log("building styles");
  return src("./src/styles.sass")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(dest("./dist"));
}

function serve() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  watch("./src/**/*.js", series(scripts, browserSync.reload));
  watch("./src/**/*.sass", series(styles, browserSync.reload));
}

module.exports = {
  default: defaultTask,
  build: build,
  dev: series(build, watchFiles),
  serve: series(build, serve)
};
