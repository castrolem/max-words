// @flow
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Footer from '../../Components/Footer';
import TabView from '../../Components/TabView';
import type { Scene } from '../../Components/TabView';
import { convertArrayToObject } from '../../Helpers/object';
import type { PagesStore, Pages, Page } from '../../Reducers/pages';
import { addPage } from '../../Actions/pages';
import WriterScreen from '../Writer';
import styles from './styles';

type Props = {
  createPage: () => void,
  currentPage: number,
  pages: Pages,
};

type Route = {
  key: string,
  title: string,
};

type NavigationState = Array<Route>;

const mapPagesToTabs = (pages: Pages): Array<Scene> => (
  pages.map((page: Page) => (
    { [page.id]: () => <WriterScreen {...page} /> }
  ))
);

const mapPagesToRoutes = (pages: Pages): NavigationState => (
  pages.map((page: Page) => (
    { key: page.id, title: page.value }
  ))
);

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
