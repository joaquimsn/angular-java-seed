module.exports = function(app) {
  'use strict'
  var fs      = require('fs');

  app.engine('html', function (filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
      console.log(filePath);
      if (err) return callback(new Error(err));

      var rendered = content.toString();
      return callback(null, rendered);
    });
  });

}