// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity as NativeButton } from 'react-native';

import styles from './styles';

type Props = {
  onButtonPress: (any) => void,
  extraStyles?: Object,
  children: any,
}

const Button = ({ onButtonPress, children, extraStyles }: Props) => (
  <NativeButton
    onPress={onButtonPress}
    style={{ ...styles.container, ...extraStyles }}
  >
    {children}
  </NativeButton>
);

Button.propTypes = {
  onButtonPress: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

Button.defaultProps = {
  extraStyles: {},
};

export default Button;
