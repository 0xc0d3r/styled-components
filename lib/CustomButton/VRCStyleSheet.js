'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
/**
 * @author: Anesh Parvatha
 */

var _reactNative = require('react-native');

var _AppConfig = require('./AppConfig');

var _AppConfig2 = _interopRequireDefault(_AppConfig);

var _AppUtils = require('./AppUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// import ReusableStyles from '../../Themes/ReusableStyles'
// import StyleConstants from '../../Themes/StyleConstants'

var scaleBasedOnWidth = ['borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderWidth', 'borderLeftWidth', 'borderRightWidth', 'left', 'margin', 'marginHorizontal', 'marginLeft', 'marginRight', 'minWidth', 'padding', 'paddingHorizontal', 'paddingLeft', 'paddingRight', 'right', 'width'];
var scaleBasedOnHeight = ['borderBottomWidth', 'borderTopWidth', 'bottom', 'height', 'lineHeight', 'marginBottom', 'marginTop', 'marginVertical', 'minHeight', 'paddingBottom', 'paddingTop', 'paddingVertical', 'top'];

var borderKeys = ['borderWidth', 'borderLeftWidth', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth'];

var scaleBasedOnFontSize = ['fontSize'];

var getBorderwidth = function getBorderwidth(key, styleValue) {
  if (borderKeys.indexOf(key) > -1) {
    return styleValue < _reactNative.StyleSheet.hairlineWidth && styleValue > 0 ? _reactNative.StyleSheet.hairlineWidth : styleValue;
  }
  return styleValue;
};

var scaleValue = function scaleValue(key, value) {
  var widthCb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _AppUtils.getValueBasedOnWidth;
  var heightCb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _AppUtils.getValueBasedOnHeight;
  var fontSizeCb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _AppUtils.getFontSize;
  var borderCb = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : getBorderwidth;
  var logCb = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : function () {};

  var scaledValue = value;
  if (scaleBasedOnWidth.indexOf(key) >= 0) {
    scaledValue = widthCb(value);
  } else if (scaleBasedOnHeight.indexOf(key) >= 0) {
    scaledValue = heightCb(value);
  } else if (scaleBasedOnFontSize.indexOf(key) >= 0) {
    scaledValue = fontSizeCb(value);
  }
  // To ensure border styles are always visible
  scaledValue = borderCb(key, scaledValue);

  return scaledValue;
};

var scaleStyleObject = function scaleStyleObject(styleObject) {
  var widthCb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _AppUtils.getValueBasedOnWidth;
  var heightCb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _AppUtils.getValueBasedOnHeight;
  var fontSizeCb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _AppUtils.getFontSize;
  var borderCb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : getBorderwidth;
  var logCb = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {};

  var newStylesObject = {};
  Object.keys(styleObject).map(function (styleKey) {
    var _extends2;

    newStylesObject = _extends({}, newStylesObject, (_extends2 = {}, _extends2[styleKey] = scaleValue(styleKey, styleObject[styleKey], widthCb, heightCb, fontSizeCb, borderCb, logCb), _extends2));
  });
  return newStylesObject;
};

var getPlatformStyles = function getPlatformStyles(styles) {
  var widthCb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _AppUtils.getValueBasedOnWidth;
  var heightCb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _AppUtils.getValueBasedOnHeight;
  var fontSizeCb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _AppUtils.getFontSize;
  var borderCb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : getBorderwidth;
  var logCb = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {};

  var platformStyles = {};
  Object.keys(styles).forEach(function (name) {
    var _styles$name = _extends({}, styles[name]),
        ios = _styles$name.ios,
        android = _styles$name.android,
        style = _objectWithoutProperties(_styles$name, ['ios', 'android']);

    if (ios && _reactNative.Platform.OS === 'ios') {
      style = _extends({}, style, ios);
    }
    if (android && _reactNative.Platform.OS === 'android') {
      style = _extends({}, style, android);
    }
    if (_AppConfig2.default.ENABLE_SCALING_FOR_STYLES) {
      platformStyles[name] = scaleStyleObject(style, widthCb, heightCb, fontSizeCb, borderCb, logCb);
    } else {
      platformStyles[name] = style;
    }
  });

  return platformStyles;
};

function create(styles) {
  var platformStyles = getPlatformStyles(styles);
  return _reactNative.StyleSheet.create(platformStyles);
}

exports.default = _extends({}, _reactNative.StyleSheet, {
  create: create,
  getFontSize: _AppUtils.getFontSize,
  getValueBasedOnWidth: _AppUtils.getValueBasedOnWidth,
  getValueBasedOnHeight: _AppUtils.getValueBasedOnHeight,
  // ...StyleConstants,
  // ...ReusableStyles,
  scaleStyleObject: scaleStyleObject,
  getPlatformStyles: getPlatformStyles
});
module.exports = exports['default'];