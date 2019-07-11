// @flow
/**
 * @author: Anesh Parvatha
 */

import { StyleSheet } from 'react-native';

const config = {
  stylesheet: StyleSheet,
};

const setStyleSheet = (stylesheet: any) => {
  config.stylesheet = stylesheet;
};

export { config as default, setStyleSheet };
