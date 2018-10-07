// @flow
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Footer from '../../Components/Footer';
import TabView from '../../Components/TabView';
import { convertArrayToObject } from '../../Helpers/object';
import type { PagesStore, Pages } from '../../Reducers/pages';
import { addPage } from '../../Actions/pages';
import { mapPagesToRoutes, mapPagesToTabs } from './helpers';
import styles from './styles';

type Props = {
  createPage: () => void,
  currentPage: number,
  pages: Pages,
};

const MainScreen = ({ createPage, currentPage, pages }: Props) => (
  <View style={styles.container}>
    <TabView
      currentPage={currentPage}
      routes={mapPagesToRoutes(pages)}
      screens={convertArrayToObject(mapPagesToTabs(pages))}
    />
    <Footer createPage={createPage} />
  </View>
);

const mapStateToProps = (state: { pages: PagesStore }) => ({
  currentPage: state.pages.currentPage,
  pages: state.pages.pages,
});

const mapDispatchToProps = {
  createPage: addPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
