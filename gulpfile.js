/**
 * Created by bram on 7/20/17.
 */

var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');


gulp.task('build-html', function() {
    return gulp.src('src/pages/*')
        .pipe(nunjucksRender({
            path: ['src/components/']
        }))
        .pipe(gulp.dest('build/'))
});
