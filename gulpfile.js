var gulp = require("gulp");
var jshint = require("gulp-jshint");
var browserify = require("browserify");
var transform = require("vinyl-transform");

gulp.task("jshint", function () {
    gulp.src("./public/javascripts/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task("watch", function () {
    gulp.watch(["./public/javascripts/**/*.js"], ["browserify"]);
});

gulp.task("browserify", function () {
    var browserified = transform(function(filename) {
        var b = browserify(filename);
        return b.bundle();
    });

    return gulp.src(["./public/javascripts/index.js"])
        .pipe(browserified)
        .pipe(gulp.dest('./dist/javascripts'));
});

gulp.task("default", ["watch", "jshint"]);

