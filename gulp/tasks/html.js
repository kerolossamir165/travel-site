let gulp = require('gulp')
let browserSync = require('browser-sync').create()

gulp.task('html', function () {
    browserSync.reload()
    console.log('html tasks')
})