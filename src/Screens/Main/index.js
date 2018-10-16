// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Footer from '../../Components/Footer';
import TabView from '../../Components/TabView';
import { convertArrayToObject } from '../../Helpers/object';
import type { PagesStore, Pages } from '../../Reducers/pages';
import { addPage, navigateTo } from '../../Actions/pages';
import { setTheme } from '../../Actions/themes';
import ThemeSelector from '../ThemeSelector';
import { mapPagesToRoutes, mapPagesToTabs } from './helpers';
import styles from './styles';

type Props = {
  createPage: () => void,
  navigateToPage: () => void,
  currentPage: number,
  pages: Pages,
  setAppTheme: (string) => void,
};

type State = {
  isModalOpen: boolean,
}

class MainScreen extends Component<Props, State> {
  state = {
    isModalOpen: false,
  }

  toggleThemeSelector = () => this.setState(
    (currentState: State) => ({ isModalOpen: !currentState.isModalOpen })
  );

  selectTheme = (theme: string) => {
    const { setAppTheme } = this.props;
    setAppTheme(theme);
    this.toggleThemeSelector();
  }

  render() {
    const {
      createPage,
      currentPage,
      navigateToPage,
      pages,
    } = this.props;
    const { isModalOpen } = this.state;

    return (
      <View style={styles.container}>
        <TabView
          currentPage={currentPage}
          navigateToPage={navigateToPage}
          routes={mapPagesToRoutes(pages)}
          screens={convertArrayToObject(mapPagesToTabs(pages))}
        />
        <Footer
          createPage={createPage}
          currentPage={currentPage}
          pagesCount={pages.length}
          setTheme={this.toggleThemeSelector}
        />
        <ThemeSelector
          visible={isModalOpen}
          selectTheme={this.selectTheme}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: { pages: PagesStore }) => ({
  currentPage: state.pages.currentPage,
  pages: state.pages.pages,
});

const mapDispatchToProps = {
  createPage: addPage,
  navigateToPage: navigateTo,
  setAppTheme: setTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
