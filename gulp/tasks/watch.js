let gulp = require('gulp')
let watch = require('gulp-watch')
let browserSync = require('browser-sync').create()

gulp.task('watch', function () {

    browserSync.init({
        server: {
            notify: false,
            baseDir: 'app'
        }
    })

    watch('./app/index.html', function () {
        browserSync.reload()
    })


    watch('./app/assets/styles/**/*.css', function () {

        gulp.start('cssInject')
    })
})



/*** before run cssInject run styles task ********************** */
/***** to inject compiled css in html file on the fly without refresh ********************************* */
gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./app/dist/styles/style.css')
        .pipe(browserSync.stream())
})