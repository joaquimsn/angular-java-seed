'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (cb) {
  global.isProd = true;
  runSequence('clean', 
  [
    'styles', 
    'fonts', 
    'images', 
    'languages', 
    'app', 
    'browserify',
  ],
  'gzip',
  [
    'copy-views-for-java-project', 
    'copy-build-for-java-project'
  ], cb);
    
  return;
});