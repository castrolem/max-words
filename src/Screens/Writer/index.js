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

type Props = {};

type State = {
  isEditing: boolean,
  value: string,
};

class WriterScreen extends Component<Props, State> {
  state = {
    isEditing: false,
    value: '',
  };

  onChangeText = (value: string) => {
    this.setState({ value });
  }

  toggleTextView = () => {
    this.setState((state: State) => ({ isEditing: !state.isEditing }));
  }

  render() {
    const { isEditing, value } = this.state;
    const deviceDimensions = Dimensions.get('window').width - 20;
    const lines = SizeCalculator.words(value);

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
                lines.map(
                  (line: string) => (
                    <Text
                      key={line.toString()}
                      allowFontScaling={false}
                      adjustsFontSizeToFit={false}
                      style={
                        {
                          fontSize: SizeCalculator.calculate(deviceDimensions, line.length),
                          textAlignVertical: 'center',
                          textAlign: 'center',
                        }
                      }
                    >
                      {line}
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
