var gulp = require('gulp'),
    gulpSass = require('gulp-sass'),
    liveReload = require('gulp-livereload');

gulp.task('liverReloadSassTask', function () {
    gulp.src('./dev/*.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('./dist'))
        .pipe(liveReload());
})

gulp.task('liverReloadSassWatchTask', function () {
    liveReload.listen();
    gulp.watch('./*.scss', ['liverReloadsassTask']);
});

gulp.task('default',['liverReloadSassTask','liverReloadSassWatchTask']);