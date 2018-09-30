// @flow
import React from 'react';
import { View } from 'react-native';
import Footer from '../../Components/Footer';
import WriterScreen from '../Writer';

import styles from './styles';

const MainScreen = () => (
  <View style={styles.container}>
    <WriterScreen />
    <Footer />
  </View>
);

export default MainScreen;
