'use strict';

/*
 * Configurações globais para o Gulp responsável por mapear a origem e destino
 * dos arquivos.
 **/
module.exports = {

    'browserPort': 3002,
    'UIPort': 3001,
    'serverPort': 3000,

    'watch': {
        'scripts': ['src/js/modules/*.js', 'src/js/modules/**/*.js', 'src/js/*.js'],
        'styles': 'src/resources/styles/css/*.css',
        'images': ['src/resources/images/*'],
        'languages': ['src/resources/languages/*.json', 'src/resources/languages/**/*.json'],
        'views': ['src/views/modules/**/views/*.html', 'src/views/modules/**/views/partials/*.html', 'src/views/*.html']
    },

    'nodemon': {
        'script': 'servidor/bin/www',
        'ext': 'js',
        'env': 'development',
        'watch': 'servidor/'
    },

    'css': {
        'src': ['src/resources/styles/css/plugins/*.css', 'src/resources/styles/css/*.css'],
        'dest': 'build/resources/css'
    },

    'scripts': {
        'src': ['src/js/**/*.js', 'src/js/**/**/*.js'],
        'dest': 'build/js'
    },

    'images': {
        'src': ['src/resources/images/*', 'src/resources/images/**/*'],
        'dest': 'build/resources/images'
    },

    'fonts': {
        'src': ['src/resources/fonts/*', 'src/resources/fonts/**/*'],
        'dest': 'build/resources/fonts'
    },

    'app': {
        'src': ['src/resources/app/*'],
        'dest': 'build/resources/app'
    },

    'languages': {
        'src': 'src/resources/languages',
        'dest': 'build/resources/languages'
    },

    'gzip': {
        'src': 'build/**/*.{html,xml,json,css,js,js.map}',
        'dest': 'build/',
        'options': {}
    },

    'dist': {
        'root': 'build'
    },

    'copyViewsForJavaProject': {
        'src': ['src/views/**/**/views/*.html', 'src/views/**/**/views/partials/*.html', 'src/views/*.html'],
        'dest': '../src/main/webapp/WEB-INF/views'
    },

    'copyBuildForJavaProject': {
        'src': ['build/**/*', 'build/**/**/*'],
        'dest': '../src/main/webapp/build'
    },

    'browserify': {
        'entries': ['src/js/app.js'],
        'bundleName': 'app.js',
        'sourcemap': true
    },

    'test': {
        'source': [
            'src/js/test/modules/**/*Spec.js',
            'back/test/modules/**/*Spec.js'
        ],
        'jade': {
            'source': 'back/modules/**/views/*.jade',
            'dest': 'src/js/test/templates'
        }
    }

};