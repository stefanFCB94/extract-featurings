var gulp = require('gulp');
var mocha = require('gulp-mocha');
var ts = require('gulp-typescript');
var merge = require('merge2');
var runSeq = require('run-sequence');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('test', function() {
	gulp.src('dist/test/**/*.js', { read: false})
		.pipe(mocha({ reporter: 'spec' }));
});

// Compile all Prod and Test-Files
gulp.task('compile', function() {
	var tsResult = gulp.src('src/**/*.ts')
		.pipe(tsProject());

	return merge([
		tsResult.js.pipe(gulp.dest('dist')),
		tsResult.dts.pipe(gulp.dest('dist'))
	]);
});

// Build-Task
gulp.task('build', function() {
	runSeq('compile', 'test');
});



gulp.task('watch', function() {
	gulp.watch('src/**/*.ts', ['build']);
});
