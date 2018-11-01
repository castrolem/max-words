import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './styles';

const WelcomeText = () => (
  <View style={styles.welcomeTextContainer}>
    <Text style={styles.welcomeText}>Welcome! Tap here to get Started</Text>
  </View>
);

export default WelcomeText;
