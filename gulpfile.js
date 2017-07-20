/**
 * Created by bram on 7/20/17.
 */

var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var gulpSass = require('gulp-sass');

gulp.task('build', [
    'build-html',
    'build-sass',
]);


gulp.task('build-html', function() {
    return gulp.src('src/pages/*')
        .pipe(nunjucksRender({
            path: ['src/components/']
        }))
        .pipe(gulp.dest('build/'))
});

gulp.task('build-sass', function() {
    return gulp.src('src/assets/stylesheets/**/*.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('build/assets/css/'))
});