import { StyleSheet } from 'react-native';

import CONSTANTS from '../../Constants';

export default (StyleSheet.create({
  container: {
    borderColor: 'gray',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: CONSTANTS.size.base * 3,
    flex: 1,
  },
  dot: {
    backgroundColor: 'white',
    height: CONSTANTS.size.base * 2,
    margin: CONSTANTS.size.base / 2,
    width: CONSTANTS.size.base * 2,
    borderRadius: 50,
    opacity: 0.3,
  },
  activeDot: {
    opacity: 0.9,
  },
}));
