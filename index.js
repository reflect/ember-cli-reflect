/* jshint node: true */
'use strict';

const DEFAULT_ASSET_VERSION = 'latest';
const getJSSource = ver => `https://cdn.reflect.io/${ver}/reflect.js`;
const getCSSSource = ver => `https://cdn.reflect.io/${ver}/reflect.css`;

const getHead = function(config) {
  let cssSource = getCSSSource(DEFAULT_ASSET_VERSION);
  let jsSource = getJSSource(DEFAULT_ASSET_VERSION);

  if (config.reflect) {
    if (config.reflect.version) {
      jsSource = getJSSource(config.reflect.version);
      cssSource = getCSSSource(config.reflect.version);
    }

    if (config.reflect.js) {
      jsSource = config.reflect.js;
    }

    if (config.reflect.css) {
      cssSource = config.reflect.css;
    }
  }

  return '<script src="' + jsSource  + '" type="text/javascript"></script> \
<link rel="stylesheet" href="' + cssSource + '">';
};

module.exports = {
  name: 'ember-cli-reflect',
  contentFor: function(type, config) {
    if (type === 'head') {
      return getHead(config);
    };
  }
};
