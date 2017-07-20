/**
 * Created by bram on 7/20/17.
 */

var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var gulpSass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('build', [
    'build-html',
    'build-sass',
]);


gulp.task('build-html', function() {
    return gulp.src('src/pages/**')
        .pipe(nunjucksRender({
            path: ['src/components/']
        }))
        .pipe(gulp.dest('build/'))
});

gulp.task('build-sass', function() {
    return gulp.src('src/assets/stylesheets/**')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('build/assets/css/'))
});

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