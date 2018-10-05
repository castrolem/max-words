// @flow
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/Store';

import MainScreen from './src/Screens/Main';

import styles from './styles';

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <MainScreen />
    </View>
  </Provider>
);

export default App;
