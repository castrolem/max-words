// @flow
import React, { Component } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';

import TextBox from '../../Components/TextBox';
import SizeCalculator from '../../Services/SizeCalculator';

import styles from './styles';

type Props = {
  id: string,
  value: string, // eslint-disable-line react/no-unused-prop-types
};

type State = {
  isEditing: boolean,
  value: string,
};

class WriterScreen extends Component<Props, State> {
  state = {
    isEditing: false,
    value: '',
  };

  static getDerivedStateFromProps(props: Props) {
    return ({
      value: props.value,
    });
  }

  onChangeText = (value: string) => {
    this.setState({ value });
  }

  toggleTextView = () => {
    this.setState((state: State) => ({ isEditing: !state.isEditing }));
  }

  render() {
    const { isEditing, value } = this.state; // eslint-disable-line no-unused-vars
    const deviceDimensions = Dimensions.get('window').width - 20;
    const sentences = SizeCalculator.sentences(value);
    const { id } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={50}
            style={styles.keyboardAvoidContainer}
          >
            <ScrollView style={{ flex: 1 }}>
              {
                sentences.map(
                  (sentence: Array<string>) => (
                    <Text
                      key={id}
                      allowFontScaling={false}
                      adjustsFontSizeToFit={false}
                      style={
                        {
                          fontSize: SizeCalculator.calculate(deviceDimensions, sentence.join(' ').length),
                          textAlignVertical: 'center',
                          textAlign: 'center',
                        }
                      }
                    >
                      {sentence.join(' ')}
                    </Text>
                  )
                )
              }
            </ScrollView>
            <TextBox
              onChangeText={this.onChangeText}
              onFocus={this.toggleTextView}
              onBlur={this.toggleTextView}
              value={value}
            />
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    );
  }
}

export default WriterScreen;
