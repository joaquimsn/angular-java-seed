'use strict';

var filterModule = require('./_index');

function SenacTextOverflow() {

    return function(text, size){
        if(text.length > size){
            return text.substring(0,size) + '...';
        }
        
        return text;
    };        
}

filterModule.filter('SenacTextOverflow', SenacTextOverflow);