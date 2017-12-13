// /*
//  Author: Mahalakshmi
//
//  Responsibility:
//
//  */
//
// /*  */
//
// // React and React Native
// import React, { Component } from 'react'
// import { View } from 'react-native'
//
// // Actions
// // Components
// import StyleSheet from './VRCStyleSheet'
// import { Text } from './VRCText'
// import VRCIcon from './VRCIcon'
// import VRCTouchable from './VRCTouchable'
// import VRCImage from './VRCImage'
// import RNLinearGradient from './Gradients/LinearGradient'
// import {
//   getValueBasedOnWidth,
//   getValueBasedOnHeight
// } from '../../Utils/AppUtils'
//
// import Badge, { BADGE_OFFSET } from './Tabs/Badge'
//
// // Constants
// // Containers
// // Themes
// import { Colors, Fonts } from '../../Themes'
// import { ON_BUTTON_CLICK } from '../../Constants/SoundConstants'
//
// // Third party packages
// // import PropTypes from 'prop-types'
//
// const BUTTON_HEIGHT = 35
// const BUTTON_WIDTH = 100
// const IMAGE_WIDTH = 35
// const IMAGE_HEIGHT = 35
// const ICON_SIZE = getValueBasedOnWidth(22)
//
// export const DisabledButtonBackground = props => {
//   const {
//     buttonStyle,
//     disabledButtonInnerLayer,
//     containerStyle,
//     resourceId,
//     onDisablePress
//   } = props
//   return (
//     <VRCTouchable
//       style={[styles.disabledButtonContainer, containerStyle]}
//       {...appiumUtil(resourceId)}
//       onPress={onDisablePress}
//     >
//       <View style={[styles.button, styles.disabledButtonBg, buttonStyle]}>
//         <View style={[styles.disableInnerLayer, disabledButtonInnerLayer]}>
//           {props.children}
//         </View>
//       </View>
//     </VRCTouchable>
//   )
// }
//
// export const ButtonChildren = props => {
//   const innerLayerHeight = StyleSheet.flatten(props.buttonStyle).height / 2.6
//   const { borderRadius } = StyleSheet.flatten(props.style)
//   return [
//     <View
//       key='Bg'
//       style={[
//         styles.middleLayer,
//         { backgroundColor: props.middleLayerBg, borderRadius }
//       ]}
//     >
//       <View
//         style={[
//           styles.innerLayer,
//           {
//             height: innerLayerHeight,
//             borderRadius,
//             backgroundColor: props.innerLayerBg
//           }
//         ]}
//       />
//     </View>,
//     <View
//       key='Children'
//       style={[styles.childrenContainer, props.childrenContainer]}
//     >
//       {props.children}
//     </View>
//   ]
// }
//
// export const VRCButtonBackground = props => {
//   return (
//     <RNLinearGradient colors={props.lgColors} style={props.style}>
//       {ButtonChildren(props)}
//     </RNLinearGradient>
//   )
// }
//
// const renderBadge = (badgeListeningConstant, other) => {
//   if (!badgeListeningConstant) return null
//   return (
//     <Badge
//       style={[styles.badge, other.badgeContainerStyle]}
//       badgeListeningConstant={badgeListeningConstant}
//     />
//   )
// }
//
// export const VRCButtonBackgroundButton = props => {
//   const {
//     containerStyle,
//     touchTimeOut,
//     resourceId,
//     shadowStyle,
//     badgeListeningConstant,
//     disableSound,
//     soundKey,
//     ...other
//   } = props
//   let style = [styles.button, props.buttonStyle]
//   const { width, height, borderRadius } = StyleSheet.flatten(style)
//   let shadowStyles = [style, styles.shadowStyle, shadowStyle]
//   let { top } = StyleSheet.flatten(shadowStyles)
//   let touchableStyles = {
//     width: width,
//     height: height + top
//   }
//   let viewStyle = {}
//   if (!_.isNil(badgeListeningConstant)) {
//     viewStyle = {
//       width: width + BADGE_OFFSET,
//       height: height + top + BADGE_OFFSET,
//       alignItems: 'center'
//     }
//   }
//
//   return (
//     <View style={containerStyle}>
//       <View style={viewStyle}>
//         <VRCTouchable
//           onPress={props.onPress}
//           disableSound={disableSound}
//           soundKey={soundKey}
//           wrapperViewStyles={touchableStyles}
//           style={[touchableStyles]}
//           touchTimeOut={touchTimeOut}
//           resourceId={resourceId}
//         >
//           <View style={[{ borderRadius }, shadowStyles]} />
//           <VRCButtonBackground {...other} style={style} />
//         </VRCTouchable>
//         {renderBadge(badgeListeningConstant, other)}
//       </View>
//     </View>
//   )
// }
//
// class CustomButtonIcon extends Component {
//   static defaultProps = {
//     buttonStyle: {},
//     size: ICON_SIZE,
//     offsetSize: 10,
//     type: 'Ionicons',
//     disable: false
//   }
//   static propTypes = {}
//
//   render () {
//     const {
//       style,
//       name,
//       size,
//       type,
//       buttonStyle,
//       disable,
//       offsetSize
//     } = this.props
//     let RenderComponent = disable
//       ? DisabledButtonBackground
//       : VRCButtonBackgroundButton
//     return (
//       <RenderComponent
//         {...this.props}
//         buttonStyle={[
//           styles.imageButtonStyle,
//           {
//             width: size + getValueBasedOnWidth(offsetSize),
//             height: size + getValueBasedOnHeight(offsetSize)
//           },
//           buttonStyle
//         ]}
//       >
//         <VRCIcon
//           type={type}
//           name={name}
//           size={size}
//           color={Colors.white_nine}
//           style={style}
//         />
//       </RenderComponent>
//     )
//   }
// }
//
// class CustomButtonImage extends Component {
//   static defaultProps = {
//     buttonStyle: {},
//     imageStyle: {
//       width: StyleSheet.getValueBasedOnWidth(IMAGE_WIDTH),
//       height: StyleSheet.getValueBasedOnHeight(IMAGE_HEIGHT)
//     },
//     disable: false
//   }
//   static propTypes = {}
//
//   render () {
//     const { imageStyle, source, buttonStyle, disable } = this.props
//     const { width, height } = StyleSheet.flatten(imageStyle)
//     let RenderComponent = disable
//       ? DisabledButtonBackground
//       : VRCButtonBackgroundButton
//     return (
//       <RenderComponent
//         {...this.props}
//         buttonStyle={[
//           styles.imageButtonStyle,
//           {
//             width: width + getValueBasedOnWidth(10),
//             height: height + getValueBasedOnHeight(10)
//           },
//           buttonStyle
//         ]}
//       >
//         <VRCImage source={source} style={[styles.image, imageStyle]} />
//       </RenderComponent>
//     )
//   }
// }
//
// class CustomButtonImageTitle extends Component {
//   static defaultProps = {
//     buttonStyle: {},
//     imageStyle: {
//       width: StyleSheet.getValueBasedOnWidth(IMAGE_WIDTH),
//       height: StyleSheet.getValueBasedOnHeight(IMAGE_HEIGHT)
//     },
//     disable: false,
//     style: {},
//     imageTextContainerStyle: {}
//   }
//   static propTypes = {}
//
//   render () {
//     const {
//       imageStyle,
//       source,
//       title,
//       textStyle,
//       imageTextContainerStyle,
//       disable
//     } = this.props
//     let RenderComponent = disable
//       ? DisabledButtonBackground
//       : VRCButtonBackgroundButton
//     let disabledText = {}
//     if (disable) {
//       disabledText = styles.disabledText
//     }
//     return (
//       <RenderComponent {...this.props}>
//         <View style={[styles.imageTextContainer, imageTextContainerStyle]}>
//           <VRCImage source={source} style={[styles.image, imageStyle]} />
//           <Text style={[styles.textStyle, textStyle, disabledText]}>
//             {title}
//           </Text>
//         </View>
//       </RenderComponent>
//     )
//   }
// }
//
// class CustomButton extends Component {
//   static defaultProps = {
//     buttonStyle: {}
//   }
//   static propTypes = {}
//
//   render () {
//     const { title, textStyle, disable } = this.props
//     let RenderComponent = disable
//       ? DisabledButtonBackground
//       : VRCButtonBackgroundButton
//     let disabledText = {}
//     if (disable) {
//       disabledText = styles.disabledText
//     }
//     return (
//       <RenderComponent {...this.props}>
//         <Text style={[styles.textStyle, textStyle, disabledText]}>{title}</Text>
//       </RenderComponent>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   button: {
//     borderRadius: 3.3,
//     width: BUTTON_WIDTH,
//     height: BUTTON_HEIGHT,
//     paddingHorizontal: 3,
//     paddingVertical: 2,
//     backgroundColor: 'transparent'
//   },
//   middleLayer: {
//     borderRadius: 2.3,
//     backgroundColor: Colors.butterscotch_four,
//     paddingHorizontal: 2,
//     flex: 1
//   },
//   innerLayer: {
//     borderRadius: 2.3,
//     height: BUTTON_HEIGHT / 2.6,
//     backgroundColor: Colors.light_gold
//   },
//   childrenContainer: {
//     ...StyleSheet.absoluteFillObject,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   textStyle: {
//     color: Colors.white_nine,
//     ...Fonts.fontFamily.landriaSolidRegular,
//     fontSize: 16,
//     textShadowColor: Colors.burnt_sienna,
//     textShadowOffset: {
//       width: 0,
//       height: 0.7
//     }
//   },
//   image: {
//     width: IMAGE_WIDTH,
//     height: IMAGE_HEIGHT
//   },
//   imageButtonStyle: {
//     paddingHorizontal: 3,
//     paddingVertical: 3
//   },
//   imageTextContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around'
//   },
//   shadowStyle: {
//     ...StyleSheet.absoluteFillObject,
//     top: 1.5,
//     backgroundColor: Colors.iconShadowColor
//   },
//   disabledButtonBg: {
//     backgroundColor: Colors.white_eight
//   },
//   disableInnerLayer: {
//     flex: 1,
//     flexDirection: 'row',
//     borderRadius: 5,
//     backgroundColor: Colors.white_seven,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   disableContainer: {
//     marginTop: 0
//   },
//   disabledButtonContainer: {
//     margin: 0
//   },
//   disabledText: {
//     color: Colors.butterscotch_two,
//     textShadowOffset: {
//       width: 0,
//       height: 0
//     }
//   },
//   badge: {
//     position: 'absolute',
//     top: -BADGE_OFFSET,
//     right: -BADGE_OFFSET
//   }
// })
//
// DisabledButtonBackground.defaultProps = {
//   onDisablePress: () => {}
// }
//
// VRCButtonBackgroundButton.defaultProps = {
//   onPress: () => {},
//   soundKey: ON_BUTTON_CLICK,
//   disableSound: false
// }
// VRCButtonBackground.defaultProps = {
//   lgColors: Colors.linearGradientColors,
//   middleLayerBg: Colors.butterscotch_four,
//   innerLayerBg: Colors.light_gold
// }
// CustomButton.Icon = CustomButtonIcon
// CustomButton.Image = CustomButtonImage
// CustomButton.ImageTitle = CustomButtonImageTitle
//
// export default CustomButton
"use strict";