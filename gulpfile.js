const gulp = require('gulp');
const mocha = require('gulp-mocha');
const ts = require('gulp-typescript');
const merge = require('merge2');
const runSeq = require('run-sequence');
const istanbul = require('gulp-istanbul');
const remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');

const tsProject = ts.createProject('tsconfig.json');


gulp.task('clear_compile_dir', function() {
	gulp.src('dist', {read: false})
		.pipe(clean());
});

// Compile all Prod and Test-Files
gulp.task('compile', ['clear_compile_dir'], function() {
	const tsResult = gulp.src('src/**/*.ts')
		.pipe(sourcemaps.init())
		.pipe(tsProject());

	return merge([
		tsResult.js
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest('dist')),
		tsResult.dts
			.pipe(gulp.dest('dist'))
	]);

});

gulp.task('test:instrument', () => {
	return gulp.src('./dist/lib/**/*.js')
		.pipe(istanbul())
		.pipe(istanbul.hookRequire());
});

gulp.task('test:cover', ['test:instrument'], () => {
	return gulp.src('./dist/test/**/*.js')
		.pipe(mocha({ reporter: 'spec'}))
		.pipe(istanbul.writeReports({
			reporters: [ 'json' ]
		}))
		.on('end', remapCoverageFiles);
});

function remapCoverageFiles() {
	return gulp.src('./coverage/coverage-final.json')
	.pipe(remapIstanbul({
		 reports: {
			  'html': './coverage/html',
			  'text-summary': null,
			  'lcovonly': './coverage/lcov.info'
		 }
	}));
}

gulp.task('test', ['test:cover']);

// Build-Task
gulp.task('build', function() {
	runSeq('compile', 'test');
});

gulp.task('watch-build', function() {
	gulp.watch('src/**/*.ts', ['build']);
});

gulp.task('watch-compile', function() {
	gulp.watch('src/lib/**/*.ts', ['compile']);
});
