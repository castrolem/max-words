// @flow
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

type Props = {
  currentPage: number,
  pagesCount: number,
}

const Pagination = ({ currentPage, pagesCount }: Props) => {
  const dots = [...new Array(pagesCount)];

  return (
    <View style={styles.container}>
      {
        dots.map((_, idx) => (
          <View
            inFocus={currentPage}
            key={idx} // eslint-disable-line 
            dotIdx={idx}
            style={[styles.dot, idx === currentPage && styles.activeDot]}
          />
        ))
      }
    </View>
  );
};

export default Pagination;
