// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

type Route = {
  key: string | number,
  title: string
}

type Props = {
  scenes: Array<Route>,
  currentSceneIndex: number
}

type State = {
  index: number,
  routes: Array<Route>
}

class DynamicTabView extends React.Component<Props, State> {
  static propTypes = {
    currentSceneIndex: PropTypes.number.isRequired,
    scenes: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
    })).isRequired,
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    return ({
      routes: props.scenes,
      index: props.currentSceneIndex,
    });
  }

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap(() => <View />)} // View
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ height: 0, width: Dimensions.get('window').width }}
      />
    );
  }
}

export default DynamicTabView;
