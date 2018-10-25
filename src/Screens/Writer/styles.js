import { Dimensions } from 'react-native';

import CONSTANTS from '../../Constants';
import { FOOTER_HEIGHT } from '../../Components/Footer/styles';

export default (
  {
    actionContainer: {
      padding: CONSTANTS.size.containerPadding,
      paddingBottom: 0,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    actionButton: {
      backgroundColor: '#FF0A17',
    },
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
    },
  }
);
