// @flow
/**
 * @author: Anesh Parvatha
 */

import { StyleSheet, Platform } from 'react-native'
import AppConfig from './AppConfig'
import {
  getValueBasedOnWidth,
  getFontSize,
  getValueBasedOnHeight,
} from './AppUtils'

// import ReusableStyles from '../../Themes/ReusableStyles'
// import StyleConstants from '../../Themes/StyleConstants'

const scaleBasedOnWidth = [
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'left',
  'margin',
  'marginHorizontal',
  'marginLeft',
  'marginRight',
  'minWidth',
  'padding',
  'paddingHorizontal',
  'paddingLeft',
  'paddingRight',
  'right',
  'width',
]
const scaleBasedOnHeight = [
  'borderBottomWidth',
  'borderTopWidth',
  'bottom',
  'height',
  'lineHeight',
  'marginBottom',
  'marginTop',
  'marginVertical',
  'minHeight',
  'paddingBottom',
  'paddingTop',
  'paddingVertical',
  'top',
]

const borderKeys = [
  'borderWidth',
  'borderLeftWidth',
  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
]

const scaleBasedOnFontSize = ['fontSize']

const getBorderwidth = (key, styleValue) => {
  if (borderKeys.indexOf(key) > -1) {
    return styleValue < StyleSheet.hairlineWidth && styleValue > 0
      ? StyleSheet.hairlineWidth
      : styleValue
  }
  return styleValue
}

const scaleValue = (
  key,
  value,
  widthCb = getValueBasedOnWidth,
  heightCb = getValueBasedOnHeight,
  fontSizeCb = getFontSize,
  borderCb = getBorderwidth,
  logCb = () => {},
) => {
  let scaledValue = value
  if (scaleBasedOnWidth.indexOf(key) >= 0) {
    scaledValue = widthCb(value)
  } else if (scaleBasedOnHeight.indexOf(key) >= 0) {
    scaledValue = heightCb(value)
  } else if (scaleBasedOnFontSize.indexOf(key) >= 0) {
    scaledValue = fontSizeCb(value)
  }
  // To ensure border styles are always visible
  scaledValue = borderCb(key, scaledValue)

  return scaledValue
}

const scaleStyleObject = (
  styleObject,
  widthCb = getValueBasedOnWidth,
  heightCb = getValueBasedOnHeight,
  fontSizeCb = getFontSize,
  borderCb = getBorderwidth,
  logCb = () => {},
) => {
  let newStylesObject = {}
  Object.keys(styleObject).map(styleKey => {
    newStylesObject = {
      ...newStylesObject,
      [styleKey]: scaleValue(
        styleKey,
        styleObject[styleKey],
        widthCb,
        heightCb,
        fontSizeCb,
        borderCb,
        logCb,
      ),
    }
  })
  return newStylesObject
}

const getPlatformStyles = (
  styles,
  widthCb = getValueBasedOnWidth,
  heightCb = getValueBasedOnHeight,
  fontSizeCb = getFontSize,
  borderCb = getBorderwidth,
  logCb = () => {},
) => {
  const platformStyles = {}
  Object.keys(styles).forEach(name => {
    let { ios, android, ...style } = { ...styles[name] }
    if (ios && Platform.OS === 'ios') {
      style = { ...style, ...ios }
    }
    if (android && Platform.OS === 'android') {
      style = { ...style, ...android }
    }
    if (AppConfig.ENABLE_SCALING_FOR_STYLES) {
      platformStyles[name] = scaleStyleObject(
        style,
        widthCb,
        heightCb,
        fontSizeCb,
        borderCb,
        logCb,
      )
    } else {
      platformStyles[name] = style
    }
  })

  return platformStyles
}

function create(styles: Object): { [name: string]: number } {
  const platformStyles = getPlatformStyles(styles)
  return StyleSheet.create(platformStyles)
}

export default {
  ...StyleSheet,
  create,
  getFontSize,
  getValueBasedOnWidth,
  getValueBasedOnHeight,
  // ...StyleConstants,
  // ...ReusableStyles,
  scaleStyleObject,
  getPlatformStyles,
}
