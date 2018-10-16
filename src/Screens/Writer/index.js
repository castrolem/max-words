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
import { connect } from 'react-redux';

import type { ThemesStore } from '../../Reducers/themes';
import TextBox from '../../Components/TextBox';
import Button from '../../Components/Button';
import SizeCalculator from '../../Services/SizeCalculator';
import { removePage } from '../../Actions/pages';
import THEMES from '../../Constants/colors';

import styles from './styles';

type Props = {
  id: string,
  value: string, // eslint-disable-line react/no-unused-prop-types
  removeCurrentPage: (string) => void,
  theme: string,
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

  removeCurrentPage = () => {
    const { id, removeCurrentPage } = this.props;
    removeCurrentPage(id);
  };

  render() {
    const { isEditing, value } = this.state; // eslint-disable-line no-unused-vars
    const deviceDimensions = Dimensions.get('window').width - 20;
    const sentences = SizeCalculator.sentences(value);
    const { id, theme } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.actionContainer}>
          <Button
            onButtonPress={this.removeCurrentPage}
          >
            <Text>Delete</Text>
          </Button>
        </View>
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
                          color: THEMES[theme].textColor,
                          fontSize: SizeCalculator.calculate(deviceDimensions, sentence.join(' ').length),
                          textAlign: 'center',
                          textAlignVertical: 'center',
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

const mapStateToProps = (state: { themes: ThemesStore }) => ({
  theme: state.themes.id,
});

const mapDispatchToProps = {
  removeCurrentPage: removePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(WriterScreen);
