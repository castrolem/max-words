// @flow
import React from 'react';
import { View } from 'react-native';
import MainScreen from './src/Screens/Main';

import styles from './styles';

const App = () => (
  <View style={styles.container}>
    <MainScreen />
  </View>
);

export default App;
