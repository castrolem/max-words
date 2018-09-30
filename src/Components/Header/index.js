// @flow
import React from 'react';
import { View, Text } from 'react-native';
import Button from '../Button';

import styles from './styles';

const Header = () => (
  <View style={styles.container}>
    <Text>Header</Text>
    <Button onButtonPress={() => {}}>
      <Text>Press Me</Text>
    </Button>
  </View>
);

export default Header;
