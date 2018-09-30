import { StyleSheet } from 'react-native';

import CONSTANTS from '../../Constants';

export default (
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: 'skyblue',
      flexDirection: 'row',
      height: CONSTANTS.size.base * 10,
      padding: CONSTANTS.size.containerPadding,
      justifyContent: 'space-between',
    },
  })
);
