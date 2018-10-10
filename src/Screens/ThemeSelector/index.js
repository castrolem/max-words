// @flow
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity as NativeButton,
} from 'react-native';

import THEMES from '../../Constants/colors';
import styles from './styles';

type Props = {
  selectTheme: (string) => void,
}

const ThemeSelector = ({ selectTheme }: Props) => {
  const THEME_IDS = Object.keys(THEMES);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollableView}>
          {
            THEME_IDS.map((id: string) => (
              <NativeButton
                style={{ ...styles.theme, backgroundColor: THEMES[id].backgroundColor }}
                onPress={() => selectTheme(id)}
              >
                <Text style={{ ...styles.text, color: THEMES[id].textColor }}>
                  {id}
                </Text>
              </NativeButton>
            ))
          }
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ThemeSelector;
