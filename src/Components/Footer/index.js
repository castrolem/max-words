// @flow
import React from 'react';
import { View, Text } from 'react-native';
import Button from '../Button';
import Pagination from '../Pagination';

import styles from './styles';

type Props = {
  createPage: () => void,
  currentPage: number,
  pagesCount: number,
}

const Footer = ({ createPage, currentPage, pagesCount }: Props) => (
  <View style={styles.container}>
    <Button onButtonPress={() => {}}>
      <Text>Press Me</Text>
    </Button>
    <Pagination currentPage={currentPage} pagesCount={pagesCount} />
    <Button onButtonPress={createPage}>
      <Text>Add Page</Text>
    </Button>
  </View>
);

export default Footer;
