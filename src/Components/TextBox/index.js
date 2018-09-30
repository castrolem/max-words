// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import styles from './styles';

type Props = {
  onChangeText: (any) => void,
  onFocus?: (any) => void,
  value?: string,
};

const defaultConfig = {
  autoCapitalize: 'none',
  blurOnSubmit: true,
  returnKeyType: 'done',
  textContentType: 'none',
};

const TextBox = (props: Props) => (
  <TextInput
    {...defaultConfig}
    {...props}
    style={styles.input}
  />
);

TextBox.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
};

TextBox.defaultProps = {
  onFocus: () => {},
  value: '',
};

export default TextBox;
