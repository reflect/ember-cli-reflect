'use strict';

const DEFAULT_ASSET_VERSION = 'latest';
const getJSSource = ver => `https://cdn.reflect.io/${ver}/reflect.js`;
const getCSSSource = ver => `https://cdn.reflect.io/${ver}/reflect.css`;

const getHead = function(config) {
  let cssSource = getCSSSource(DEFAULT_ASSET_VERSION);
  let jsSource = getJSSource(DEFAULT_ASSET_VERSION);
  let outputTag = '';

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

  let cssTag = `<link rel="stylesheet" href="${cssSource}">`;
  let jsTag = `<script src="${jsSource}" type="text/javascript"></script>`;

  if (config.reflect.excludeCss || config.reflect.excludeJs) {
    if (config.reflect.excludeCss && !config.reflect.excludeJs) {
      outputTag = jsTag;
    } else if (!config.reflect.excludeCss && config.reflect.excludeJs) {
      outputTag = cssTag;
    }
  } else {
    outputTag = cssTag + jsTag;
  }

  return outputTag;
};

module.exports = {
  name: 'ember-cli-reflect',
  contentFor: function(type, config) {
    if (type === 'head') {
      return getHead(config);
    }
  },

  isDevelopingAddon() {
    return true;
  },
};
