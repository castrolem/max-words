// @flow
/* eslint-disable no-underscore-dangle */
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
import type { PagesStore, Pages, Page } from '../../Reducers/pages';
import type { ThemesStore } from '../../Reducers/themes';
import { addPage, navigateTo, setPageValue } from '../../Actions/pages';
import { setTheme } from '../../Actions/themes';
import THEMES from '../../Constants/colors';
import ThemeSelector from '../ThemeSelector';
import { mapPagesToRoutes, mapPagesToTabs } from './helpers';

import styles, { INPUT_HEIGHT_INCREMENTS } from './styles';

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
  inputHeight: number,
  isEditing: boolean,
  isModalOpen: boolean,
  value: string
}

class MainScreen extends Component<Props, State> {
  state = {
    inputHeight: 0,
    isEditing: false,
    isModalOpen: false,
    value: '',
  }

  _input = null;

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

  // $FlowFixMe
  toggleInputFocus = () => this._input.focus();

  onChangeText = (id: string, value: string) => {
    const { setCurrentPageValue } = this.props;
    setCurrentPageValue(id, value);
    this.setState({ value });
  }

  onPageChange = () => {
    this.setState({ isEditing: false, value: '' });
  }

  onContentSizeChange = (event: Object) => {
    const inputHeight: number = event.nativeEvent.contentSize.height;
    this.setState({ inputHeight });
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
      inputHeight,
      isEditing,
      isModalOpen,
      value,
    } = this.state;

    const pagesWithMethods: Pages = pages.map(
      (page: Page) => ({ ...page, onPress: this.toggleInputFocus })
    );

    return (
      <View style={{ ...styles.container, backgroundColor: THEMES[theme].backgroundColor }}>
        <StatusBar
          barStyle="light-content"
        />
        <TabView
          currentPage={currentPage}
          navigateToPage={navigateToPage}
          onPageChange={this.onPageChange}
          routes={mapPagesToRoutes(pages)}
          screens={convertArrayToObject(mapPagesToTabs(pagesWithMethods))}
        />
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={10}
          style={styles.keyboardAvoidContainer}
        >
          <TextInput
            autoCapitalize="none"
            blurOnSubmit
            onContentSizeChange={this.onContentSizeChange}
            focus={isEditing}
            multiline
            onChangeText={(text: string) => this.onChangeText(currentPageId, text)}
            onFocus={this.toggleTextView}
            // $FlowFixMe
            ref={(c) => { this._input = c; }}
            returnKeyType="done"
            style={{
              ...styles.input,
              color: THEMES[theme].textColor,
              height: Math.max(INPUT_HEIGHT_INCREMENTS, inputHeight),
            }}
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
