import { StyleSheet, Dimensions } from 'react-native';

import CONSTANTS from '../../Constants';
import { FOOTER_HEIGHT } from '../../Components/Footer/styles';

export default (
  StyleSheet.create({
    container: {
      flex: 1,
      height: Dimensions.get('window').height - FOOTER_HEIGHT,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    content: {
      flex: 1,
      padding: CONSTANTS.size.containerPadding,
    },
    keyboardAvoidContainer: {
      flex: 1,
      backgroundColor: 'orange',
    },
  })
);