'use strict';

var config      = require('../config');
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var browserSync = require('browser-sync');

gulp.task('app', function () {

  return gulp.src(config.app.src)
    .pipe(changed(config.app.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.app.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true, once: true })));
});
