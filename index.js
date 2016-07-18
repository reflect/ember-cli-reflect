/* jshint node: true */
'use strict';

const REFLECT_JS_VERSION = '0.1.62',
      REFLECT_JAVASCRIPT = 'https://cdn.reflect.io/' + REFLECT_JS_VERSION +'/reflect.js',
      DEFAULT_CSS_SOURCE = 'https://cdn.reflect.io/' + REFLECT_JS_VERSION + '/reflect.css';

const getHead = function(config) {
  var cssSource;

  if (config.reflect && config.reflect.css) {
    cssSource = config.reflect.css;
  } else {
    cssSource = DEFAULT_CSS_SOURCE;
  }

  return '<script src="' + REFLECT_JAVASCRIPT + '" type="text/javascript"></script> \
<link rel="stylesheet" href="' + cssSource + '">';
};

module.exports = {
  name: 'ember-cli-reflect',
  contentFor: function(type) {
    if (type === 'head') {
      var config = this.config();

      return getHead(config);
    };
  }
};
