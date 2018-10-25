// @flow
import React, { Component } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import type { ThemesStore } from '../../Reducers/themes';
import type { PagesStore } from '../../Reducers/pages';
import { getPageValue } from '../../Reducers/pages';
import Button from '../../Components/Button';
import SizeCalculator from '../../Services/SizeCalculator';
import { removePage } from '../../Actions/pages';
import THEMES from '../../Constants/colors';

import styles from './styles';

type Props = {
  id: string,
  value: string,
  removeCurrentPage: (string) => void,
  theme: string,
};

class WriterScreen extends Component<Props> {
  removeCurrentPage = () => {
    const { id, removeCurrentPage } = this.props;
    removeCurrentPage(id);
  };

  render() {
    const { id, theme, value } = this.props;
    const deviceDimensions = Dimensions.get('window').width - 20;
    const sentences = SizeCalculator.sentences(value);

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.actionContainer}>
          <Button
            extraStyles={styles.actionButton}
            onButtonPress={this.removeCurrentPage}
          >
            <Text style={{ color: '#fff', textAlign: 'center' }}>Delete</Text>
          </Button>
        </View>
        <View style={styles.content}>
          <ScrollView style={{ flex: 1 }}>
            {
              sentences.map(
                (sentence: Array<string>) => (
                  <Text
                    key={id + sentence.join(' ')}
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
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: { pages: PagesStore, themes: ThemesStore }, ownProps: Props) => ({
  theme: state.themes.id,
  value: getPageValue(ownProps.id, state.pages.pages),
});

const mapDispatchToProps = {
  removeCurrentPage: removePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(WriterScreen);
