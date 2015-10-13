var gulp = require('gulp'),
    gulpSass = require('gulp-sass'),
    connect = require('gulp-connect');
gulp.task('connect', function() {
   return connect.server({
        port:8080,
        livereload:true
    });
});
gulp.task('liverReloadSassTask', function () {
   return gulp.src('./dev/*.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});
gulp.task('liverReloadSassWatchTask', function () {
    gulp.watch('./dev/*.scss', ['liverReloadSassTask']);
});
gulp.task('default',['connect','liverReloadSassTask','liverReloadSassWatchTask']);