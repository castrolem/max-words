import { Dimensions } from 'react-native';

import CONSTANTS from '../../Constants';

export default (
  {
    container: {
      backgroundColor: '#000',
      flexDirection: 'column',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
    },
    safeArea: {
      flex: 1,
      flexDirection: 'column',
    },
    scrollableView: {
      flex: 1,
      flexDirection: 'column',
    },
    theme: {
      flex: 1,
      justifyContent: 'flex-start',
      padding: CONSTANTS.size.containerPadding,
    },
    title: {
      fontSize: Math.round(CONSTANTS.size.base * 5),
      color: '#fff',
      padding: CONSTANTS.size.containerPadding,
    },
    text: {
      fontSize: Math.round(CONSTANTS.size.base * 2.5),
    },
  }
);
