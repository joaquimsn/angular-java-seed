'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var merge        = require('gulp-merge-json');
var path        = require('path');
var gulpif       = require('gulp-if');
var folders      = require('gulp-folders');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');

// faz a leitura folder a folder para concatenar os json
gulp.task('languages', folders(config.languages.src, function(folder) {
  return gulp.src(path.join(config.languages.src, folder, '*.json'))
    .pipe(merge(folder + '.json')) // salva todos os json dentro do folder em um unico json com o nome do folder
    .pipe(gulp.dest(config.languages.dest))
    .on('error', handleErrors)
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));
}));