/* jshint node: true */
'use strict';

const REFLECT_JAVASCRIPT = 'https://cdn.reflect.io/latest/reflect.js',
      REFLECT_CSS = 'https://cdn.reflect.io/latest/reflect.css';


const HEAD = '<script src="' + REFLECT_JAVASCRIPT + '" type="text/javascript"></script> \
<link rel="stylesheet" href="' + REFLECT_CSS + '">';

module.exports = {
  name: 'ember-cli-reflect',
  contentFor: function(type) {
    if (type === 'head') { return HEAD };
  }
};
