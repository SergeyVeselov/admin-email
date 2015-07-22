var gulp = require('gulp');
var sass = require('gulp-sass');

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
        .on('error', function(error) {
            console.log(error);
            this.emit('end')
        })
        .pipe(gulp.dest('public/css'))
        .on('end', done);
});

gulp.task('watch', ['sass'], function () {
    gulp.watch(paths.sass, ['sass']).on("error", function (error) {
        console.log(error)
    });
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
