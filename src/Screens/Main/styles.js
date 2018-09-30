import { StyleSheet } from 'react-native';

import CONSTANTS from '../../Constants';

export default (
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'powderblue',
      justifyContent: 'space-between',
    },
    content: {
      flex: 1,
      padding: CONSTANTS.size.containerPadding,
    },
  })
);
