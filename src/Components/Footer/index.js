// @flow
import React from 'react';
import { View, Text } from 'react-native';
import Button from '../Button';

import styles from './styles';

const Footer = () => (
  <View style={styles.container}>
    <Button onButtonPress={() => {}}>
      <Text>Press Me</Text>
    </Button>
    <Button onButtonPress={() => {}}>
      <Text>Press Me</Text>
    </Button>
  </View>
);

export default Footer;
