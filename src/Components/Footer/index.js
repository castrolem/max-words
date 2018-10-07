// @flow
import React from 'react';
import { View, Text } from 'react-native';
import Button from '../Button';

import styles from './styles';

type Props = {
  createPage: () => void,
}

const Footer = ({ createPage }: Props) => (
  <View style={styles.container}>
    <Button onButtonPress={() => {}}>
      <Text>Press Me</Text>
    </Button>
    <Button onButtonPress={createPage}>
      <Text>Add Page</Text>
    </Button>
  </View>
);

export default Footer;
