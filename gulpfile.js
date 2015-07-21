var gulp = require('gulp');
var sass = require('gulp-sass');
var shell = require('gulp-shell');

var paths = {
    sass: ['./sass/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function (done) {
    gulp.src('./sass/index.scss')
        .pipe(sass({
            noCache: true,
            style: "compact",
            errLogToConsole: true
        }))
        .pipe(gulp.dest('public/css'))
        .on('end', done);
});

gulp.task('watch', ['sass'], function () {
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('protractor', function () {
    var protractor = require("gulp-protractor").protractor;
    gulp.src(["./tests/*.js"])
        .pipe(protractor({
            configFile: "protractor.conf.js",
            args: ['--baseUrl', 'http://127.0.0.1:4444']
        }))
        .on('error', function (e) {
            throw e
        })
});
