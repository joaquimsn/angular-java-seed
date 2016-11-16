'use strict';

var filterModule = require('./_index');

function SenacFileSize() {

    return function(size){
        if (isNaN(size))
            size = 0;

        if (size < 1024)
            return size + ' Bytes';

        size /= 1024;

        if (size < 1024)
            return size.toFixed(2) + ' KB';

        size /= 1024;

        if (size < 1024)
            return size.toFixed(2) + ' MB';
        
    };        
}

filterModule.filter('SenacFileSize', SenacFileSize);