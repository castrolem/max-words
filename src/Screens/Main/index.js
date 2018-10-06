// @flow
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Footer from '../../Components/Footer';
import type { PagesStore, Pages, Page } from '../../Reducers/pages';
import WriterScreen from '../Writer';
import styles from './styles';

type Props = {
  pages: Pages,
  currentPage: number,
};

const MainScreen = ({ currentPage, pages }: Props) => (
  <View style={styles.container}>
    { pages.map((page: Page) => (
      <WriterScreen key={page.id} {...page} currentPage={currentPage} />
    )) }
    <Footer />
  </View>
);

const mapStateToProps = (state: { pages: PagesStore }): Props => ({
  currentPage: state.pages.currentPage,
  pages: state.pages.pages,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
