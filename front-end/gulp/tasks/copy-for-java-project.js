'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');

// Copia os htmls para o projeto java
gulp.task('copy-views-for-java-project', function() {
  return gulp.src(config.copyViewsForJavaProject.src)
    .pipe(gulp.dest(config.copyViewsForJavaProject.dest))
    .on('error', handleErrors);
});

gulp.task('copy-build-for-java-project', function() {
  return gulp.src(config.copyBuildForJavaProject.src)
    .pipe(gulp.dest(config.copyBuildForJavaProject.dest))
    .on('error', handleErrors);
});
