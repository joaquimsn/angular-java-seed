'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var cleanCss     = require('gulp-clean-css');
var concatCss 	 = require('gulp-concat-css');
var gulpif       = require('gulp-if');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');

gulp.task('styles', function () {
  gulp.src(config.css.src)
    .pipe(concatCss('bundle.css'))
    .pipe(gulpif(global.isProd, cleanCss()))
    .pipe(gulp.dest(config.css.dest))
    .on('error', handleErrors)
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));
});