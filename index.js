/* jshint node: true */
'use strict';

const REFLECT_JS_VERSION = '0.1.59',
      REFLECT_JAVASCRIPT = 'https://cdn.reflect.io/' + REFLECT_JS_VERSION +'/reflect.js';

const getHead = function(config) {
  let cssSource;

  if (config.reflect && config.reflect.css) {
    cssSource = config.reflect.css;
  } else {
    cssSource = 'https://cdn.reflect.io/' + REFLECT_JS_VERSION + '/reflect.css';
  }

  return '<script src="' + REFLECT_JAVASCRIPT + '" type="text/javascript"></script> \
<link rel="stylesheet" href="' + cssSource + '">';
};

module.exports = {
  name: 'ember-cli-reflect',
  contentFor: function(type) {
    if (type === 'head') {
      let config = this.config();

      return getHead(config);
    };
  }
};
