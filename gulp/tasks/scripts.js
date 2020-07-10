let gulp = require("gulp");
let webpack = require("webpack");
let svg2png = require("gulp-svg2png");

// gulp.task("copySvg", function () {
//   return gulp
//     .src("../../app/assets/images/icons/**/*.svg")
//     .pipe(svg2png())
//     .pipe(gulp.dest("./app/dist/icons"));
// });

gulp.task("scripts", ["modernizr"], function (callback) {
  webpack(require("../../webpack.config"), function (err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log("done");
    console.log(stats.toString());
    callback();
  });
});
