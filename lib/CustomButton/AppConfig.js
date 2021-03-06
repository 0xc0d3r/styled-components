"use strict";

exports.__esModule = true;
// Simple React Native specific changes

exports.default = {
  // font scaling override - RN default is on
  allowTextFontScaling: false,
  ENABLE_SCALING_FOR_STYLES: true,
  ENABLE_APPIUM: false,
  ENABLE_SERIALIZATION: true,
  ENABLE_JS_CRASHLYTICS: true,
  ENABLE_INSTA_BUG: true,
  ENABLE_BADGE: true,
  ENABLE_STATE_RESET: true
};
module.exports = exports["default"];