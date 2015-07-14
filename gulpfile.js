var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
    sass: ['./sass/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
    gulp.src('./sass/index.scss')
        .pipe(sass({
            noCache : true,
            style   : "compact",
            errLogToConsole: true
        }))
        .pipe(gulp.dest('public/css'))
        .on('end', done);
});


gulp.task('watch', ['sass'], function() {
    gulp.watch(paths.sass, ['sass']);
});
