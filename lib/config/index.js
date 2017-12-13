'use strict';

exports.__esModule = true;
exports.setStyleSheet = exports.default = undefined;

var _reactNative = require('react-native');

var config = {
  stylesheet: _reactNative.StyleSheet
};
/**
 * @author: Anesh Parvatha
 */

var setStyleSheet = function setStyleSheet(stylesheet) {
  config.stylesheet = stylesheet;
};

exports.default = config;
exports.setStyleSheet = setStyleSheet;