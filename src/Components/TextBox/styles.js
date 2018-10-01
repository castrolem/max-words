import { StyleSheet } from 'react-native';

import CONSTANTS from '../../Constants';

export default (StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: CONSTANTS.size.base * 3,
    height: (CONSTANTS.size.base * 3) + (CONSTANTS.size.base * 2) + CONSTANTS.size.ligatures,
    paddingTop: CONSTANTS.size.base,
    paddingBottom: CONSTANTS.size.base,
    margin: 0,
  },
}));
