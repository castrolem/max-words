// @flow
import React from 'react';
import { Image, View } from 'react-native';
import Button from '../Button';
import Pagination from '../Pagination';

import styles from './styles';

type Props = {
  createPage: () => void,
  currentPage: number,
  pagesCount: number,
  setTheme: (string) => void,
}

const Footer = ({
  createPage,
  currentPage,
  pagesCount,
  setTheme,
}: Props) => (
  <View style={styles.container}>
    <Button onButtonPress={setTheme}>
      <Image
        source={require('../../../assets/change-theme.png')}
        style={{ marginRight: 'auto', width: 50, height: 50 }}
      />
    </Button>
    <Pagination currentPage={currentPage} pagesCount={pagesCount} />
    <Button onButtonPress={createPage}>
      <Image
        source={require('../../../assets/add-panel.png')}
        style={{ marginLeft: 'auto', width: 50, height: 50 }}
      />
    </Button>
  </View>
);

export default Footer;
