// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity as NativeButton } from 'react-native';

import styles from './styles';

type Props = {
  onButtonPress: (any) => void,
  children: any,
}

const Button = ({ onButtonPress, children }: Props) => (
  <NativeButton
    onPress={onButtonPress}
    style={styles.container}
  >
    {children}
  </NativeButton>
);

Button.propTypes = {
  onButtonPress: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

export default Button;
