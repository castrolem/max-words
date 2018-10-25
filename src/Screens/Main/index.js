// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  KeyboardAvoidingView,
  StatusBar,
  TextInput,
  View,
} from 'react-native';

import Footer from '../../Components/Footer';
import TabView from '../../Components/TabView';
import { convertArrayToObject } from '../../Helpers/object';
import type { PagesStore, Pages } from '../../Reducers/pages';
import type { ThemesStore } from '../../Reducers/themes';
import { addPage, navigateTo, setPageValue } from '../../Actions/pages';
import { setTheme } from '../../Actions/themes';
import THEMES from '../../Constants/colors';
import ThemeSelector from '../ThemeSelector';
import { mapPagesToRoutes, mapPagesToTabs } from './helpers';

import styles from './styles';

type Props = {
  createPage: () => void,
  currentPage: number,
  currentPageId: string,
  navigateToPage: () => void,
  pages: Pages,
  setAppTheme: (string) => void,
  setCurrentPageValue: (string, string) => void,
  theme: string,
};

type State = {
  isEditing: boolean,
  isModalOpen: boolean,
  value: string
}

class MainScreen extends Component<Props, State> {
  state = {
    isEditing: false,
    isModalOpen: false,
    value: '',
  }

  toggleThemeSelector = () => this.setState(
    (currentState: State) => ({ isModalOpen: !currentState.isModalOpen })
  );

  selectTheme = (theme: string) => {
    const { setAppTheme } = this.props;
    setAppTheme(theme);
    this.toggleThemeSelector();
  }

  toggleTextView = () => {
    this.setState((state: State) => ({ isEditing: !state.isEditing }));
  }

  onChangeText = (id: string, value: string) => {
    const { setCurrentPageValue } = this.props;
    setCurrentPageValue(id, value);
  }

  render() {
    const {
      createPage,
      currentPage,
      currentPageId,
      navigateToPage,
      pages,
      theme,
    } = this.props;
    const {
      isEditing,
      isModalOpen,
      value,
    } = this.state;

    return (
      <View style={{ ...styles.container, backgroundColor: THEMES[theme].backgroundColor }}>
        <StatusBar
          barStyle="light-content"
        />
        <TabView
          currentPage={currentPage}
          navigateToPage={navigateToPage}
          routes={mapPagesToRoutes(pages)}
          screens={convertArrayToObject(mapPagesToTabs(pages))}
        />
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={10}
          style={styles.keyboardAvoidContainer}
        >
          <TextInput
            autoCapitalize="none"
            blurOnSubmit
            focus={isEditing}
            multiline
            onChangeText={(text: string) => this.onChangeText(currentPageId, text)}
            onFocus={this.toggleTextView}
            returnKeyType="done"
            style={{ ...styles.input, color: THEMES[theme].textColor }}
            textContentType="none"
            value={value}
          />
        </KeyboardAvoidingView>
        <Footer
          createPage={createPage}
          currentPage={currentPage}
          pagesCount={pages.length}
          setTheme={this.toggleThemeSelector}
        />
        <ThemeSelector
          visible={isModalOpen}
          selectTheme={this.selectTheme}
          selectedTheme={theme}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: { pages: PagesStore, themes: ThemesStore }) => ({
  currentPage: state.pages.currentPage,
  currentPageId: state.pages.pages[state.pages.currentPage].id,
  pages: state.pages.pages,
  theme: state.themes.id,
});

const mapDispatchToProps = {
  createPage: addPage,
  navigateToPage: navigateTo,
  setAppTheme: setTheme,
  setCurrentPageValue: setPageValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
