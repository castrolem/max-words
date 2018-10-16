import { StyleSheet } from 'react-native';

import CONSTANTS from '../../Constants';

export const FOOTER_HEIGHT = CONSTANTS.size.base * 10;

export default (
  StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      height: FOOTER_HEIGHT,
      padding: CONSTANTS.size.containerPadding,
      justifyContent: 'space-between',
    },
  })
);
