var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
	'bower': './bower_components/',
	'assets': './assets/'
}

gulp.task("jshint", function () {
    gulp.src("./public/javascripts/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task('styles', function() {
    return gulp.src([
        './assets/styles/**.scss'
        ])
        .pipe(sass({
        	includePaths: [
        		paths.bower + 'foundation/scss',
        		paths.assets + 'styles/**.scss'
        	]
        }))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('scripts', function() {
	gulp.src([
		// paths.bower + '/jquery/dist/jquery.js',
		// paths.bower + '/foundation/js/foundation.js',
		paths.assets + 'scripts/app.js'
	])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('./public/js'));

	return gulp.src(paths.bower + '/modernizr/modernizr.js')
		.pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function() {
	gulp.watch(paths.assets + 'styles/**/*.scss', ['styles']);
	gulp.watch(paths.assets + 'scripts/**/*.js', ['scripts']);
});
gulp.task('default', ['watch', 'jshint', 'styles', 'scripts']);
