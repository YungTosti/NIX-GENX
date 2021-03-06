/**
 * Created by bram on 7/20/17.
 */

var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('build', [
    'build-html',
    'build-sass',
    'build-images',
    'build-fonts',
]);


gulp.task('build-html', function() {
    return gulp.src('src/pages/**')
        .pipe(gulp.dest('build/'))
});

gulp.task('build-sass', function() {
    return gulp.src('src/assets/stylesheets/**')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('build/assets/css/'))
});

gulp.task('build-fonts', function() {
    return gulp.src('src/assets/fonts/**')
        .pipe(gulp.dest('build/assets/fonts/'))
})

gulp.task('build-images', function() {
    return gulp.src('src/assets/images/**')
        .pipe(gulp.dest('build/assets/images/'))
})

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "build/"
        }
    });

    gulp.watch("src/assets/stylesheets/**", ['build-sass']);

    gulp.watch("src/pages/**", ['build-html']);
    gulp.watch("src/components/**", ['build-html']);

    gulp.watch("build/**").on('change', browserSync.reload);
});