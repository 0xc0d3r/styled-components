'use strict';

exports.__esModule = true;
exports.getFontSize = exports.getValueBasedOnHeight = exports.getValueBasedOnWidth = exports.HEIGHT = exports.WIDTH = exports.height = exports.width = undefined;

var _reactNative = require('react-native');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    width = _Dimensions$get.width,
    height = _Dimensions$get.height;
// import { formValueSelector } from 'redux-form'
// import VRCToast from '../Presentational/Common/VRCToast'
//
// import { TROPHY, COIN, GEM, CROWN } from '../Constants/RewardConstants'
//
// import I18n from 'react-native-i18n'

exports.width = width;
exports.height = height;
var WIDTH = exports.WIDTH = 360;
var HEIGHT = exports.HEIGHT = 640;
//
// export const copyToClipboard = value => {
//   Clipboard.setString(value)
//   VRCToast.show(I18n.t('copiedToClipboard'))
// }
//
// export const getResourceIdForFormInputs = (prefix, id) => AppiumConstants[prefix + id]
//
// export const hexToRgbA = hex => {
//   let c
//   if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
//     c = hex.substring(1).split('')
//     if (c.length === 3) {
//       c = [c[0], c[0], c[1], c[1], c[2], c[2]]
//     }
//     c = `0x${c.join('')}`
//     return [(c >> 16) & 255, (c >> 8) & 255, c & 255, 1]
//   }
//   throw new Error('Bad Hex')
// }
//
// export const getPixelSizeForLayoutSize = value => PixelRatio.getPixelSizeForLayoutSize(Number(value))
//
// export const serializeObject = (obj, serializeObj) => {
//   if (Object.keys(obj).length) {
//     return serializeObj(obj)
//   }
//   return null
// }
//
// export const serializeArray = (arr, serializeArrItem) => {
//   if (arr) return arr.map(item => serializeObject(item, serializeArrItem))
//   return []
// }

// export const getLabelFromValue = value => {
// const { options } = this.props
// for (var i = 0; i < options.length; i++) {
// if (options[i]['value'] === value) {
// return options[i]['label']
// }

var getValueBasedOnWidth = exports.getValueBasedOnWidth = function getValueBasedOnWidth(dp) {
  if (!_lodash2.default.isNil(dp)) {
    return width * dp / WIDTH;
  }
  return dp;
};

var getValueBasedOnHeight = exports.getValueBasedOnHeight = function getValueBasedOnHeight(dp) {
  if (!_lodash2.default.isNil(dp)) {
    return height * dp / HEIGHT;
  }
  return dp;
};

var getFontSize = exports.getFontSize = function getFontSize(fontSize) {
  return fontSize * (width / WIDTH);
};

// export const getValueFromStyle = (style, propValue) => {
//   if (propValue) {
//     return StyleSheet.flatten(style)[propValue]
//   }
//   return StyleSheet.flatten(style)
// }
//
// export const generateSelectorsFromState = (
//   INITIAL_VALUES,
//   state,
//   formName,
//   onSubmit = () => {},
// ) => {
//   const selectors = {}
//   for (const key in INITIAL_VALUES) {
//     selectors[key] = formValueSelector(formName)(state, key)
//   }
//   return {
//     ...selectors,
//     onSubmit,
//   }
// }
// export const getRewardDisplayName = (
//   reward_type,
//   reward_display_name,
//   rewardsCount = undefined,
// ) => {
//   let text = reward_display_name
//   switch (reward_type) {
//     case TROPHY:
//       text = rewardsCount === 1 ? 'Trophy' : 'Trophies'
//       break
//     case COIN:
//       text = rewardsCount === 1 ? 'Coin' : 'Coins'
//       break
//     case GEM:
//       text = rewardsCount === 1 ? 'Gem' : 'Gems'
//       break
//     case CROWN:
//       text = rewardsCount === 1 ? 'Crown' : 'Crowns'
//       break
//   }
//
//   return text
// }
//
// const getNumberSuffixBase = numb => {
//   switch (numb) {
//     case 1:
//       return ' st'
//     case 2:
//       return ' nd'
//     case 3:
//       return ' rd'
//     default:
//       return ' th'
//   }
// }
//
// export const getNumberSuffix = numb => {
//   const number = Number(numb)
//
//   if (number <= 20) {
//     return getNumberSuffixBase(number)
//   } else if (number > 20) {
//     const flag = number % 10
//     return getNumberSuffixBase(flag)
//   }
// }
//
// export const setKeyInAsyncStorange = async (key, value) => {
//   if (_.isNil(value)) {
//     value = key
//   }
//
//   try {
//     await AsyncStorage.setItem(key.toString(), value.toString())
//   } catch (e) {
//     __DEV__ && console.log('EXCEPTION', e)
//   }
// }
//
// export const getKeyFromAsyncStorage = async key => {
//   try {
//     return await AsyncStorage.getItem(key.toString())
//   } catch (e) {
//     return null
//   }
// }
//
// export const clearAsyncStorage = async () => {
//   try {
//     await AsyncStorage.clear()
//   } catch (e) {}
// }
//
// export const removeKeyFromAsyncStorage = async key => {
//   try {
//     await AsyncStorage.removeItem(key, () => {})
//   } catch (e) {}
// }

exports.default = {
  getValueBasedOnWidth: getValueBasedOnWidth,
  getFontSize: getFontSize,
  // getNumberSuffix,
  getValueBasedOnHeight: getValueBasedOnHeight,
  // getValueFromStyle,
  WIDTH: WIDTH,
  width: width,
  // generateSelectorsFromState,
  HEIGHT: HEIGHT,
  height: height
  // clearAsyncStorage,
  // setKeyInAsyncStorange,
  // getKeyFromAsyncStorage,
};