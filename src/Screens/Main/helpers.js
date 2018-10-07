// @flow
import React from 'react';
import type { Scene } from '../../Components/TabView';
import type { Pages, Page } from '../../Reducers/pages';
import WriterScreen from '../Writer';

type Route = {
  key: string,
  title: string,
};

type NavigationState = Array<Route>;

export const mapPagesToTabs = (pages: Pages): Array<Scene> => (
  pages.map((page: Page) => (
    { [page.id]: () => <WriterScreen {...page} /> }
  ))
);

export const mapPagesToRoutes = (pages: Pages): NavigationState => (
  pages.map((page: Page) => (
    { key: page.id, title: page.value }
  ))
);
