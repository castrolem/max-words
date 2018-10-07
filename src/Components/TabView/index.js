/* eslint-disable */
import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import {
  TabView,
  SceneMap,
} from 'react-native-tab-view';
import styles from './styles';

export type Scene = {
  [any]: any
}

type Props = {
  currentPage: number,
  routes: Array<Object>,
  screens: Object,
}

type State = {
  index: number,
  routes: Array<Object>,
}

class DynamicTabView extends Component<Props, State> {
  state = {
    index: 0,
    routes: {}
  };

  static getDerivedStateFromProps(props: Props) {
    return({
      index: props.currentPage,
      routes: props.routes,
    })
  };

  onIndexChange = (index: number) => this.setState({ index });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap(this.props.screens)}
        renderTabBar={() => {}}
        onIndexChange={this.onIndexChange}
        initialLayout={styles.container}
        useNativeDriver
      />
    );
  }
}

export default DynamicTabView;
