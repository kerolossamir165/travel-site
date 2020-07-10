let gulp = require("gulp");
let postCss = require("gulp-postcss");
let autoprefixer = require("autoprefixer");
let cssVars = require("postcss-simple-vars");
let nestCss = require("postcss-nested");
let importCss = require("postcss-import");
let mixin = require("postcss-mixins");
let hexrgba = require("postcss-hexrgba");

gulp.task("styles", function () {
  console.log("styles applied");
  return (
    gulp
      .src("app/assets/styles/style.css")
      .pipe(
        postCss([importCss, mixin, cssVars, hexrgba, nestCss, autoprefixer])
      )
      // there is an plumber package
      // plumber(functoin(err){console.log(err) this.emit('end)   })
      .on("error", function (err) {
        console.log(err.toString());
        this.emit("end");
      })
      .pipe(gulp.dest("./app/dist/styles"))
  );
});
