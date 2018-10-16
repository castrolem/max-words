// @flow
import React from 'react';
import {
  Modal,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity as NativeButton,
} from 'react-native';

import THEMES from '../../Constants/colors';
import styles from './styles';

type Props = {
  selectTheme: (string) => void,
  visible: boolean,
}

const ThemeSelector = ({ selectTheme, visible }: Props) => {
  const THEME_IDS = Object.keys(THEMES);
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollableView}>
          {
            THEME_IDS.map((id: string) => (
              <NativeButton
                key={id}
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
    </Modal>
  );
};

export default ThemeSelector;
