let gulp = require("gulp");
let imagemin = require("gulp-imagemin");
let del = require("del");
let rev = require("gulp-rev");
let uglify = require("gulp-uglify");
let cssnano = require("gulp-cssnano");

let usemin = require("gulp-usemin");
gulp.task("build", ["deleteDistFolder", "optimizeImages", "usemin"]);

gulp.task("deleteDistFolder", function () {
  return del("./app/dist");
});

gulp.task("usemin", ["deleteDistFolder", "styles", "scripts"], function () {
  return gulp
    .src("./app/index.html")
    .pipe(
      usemin({
        css: [
          function () {
            return rev();
          },
          function () {
            return cssnano();
          },
        ],
        js: [
          function () {
            return rev();
          },
          function () {
            return uglify();
          },
        ],
      })
    )
    .pipe(gulp.dest("./app/dist"));
});

gulp.task("optimizeImages", ["deleteDistFolder"], function () {
  return gulp
    .src(["./app/assets/images/**/*"])
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        multipass: true,
      })
    )
    .pipe(gulp.dest("./app/dist/images"));
});
