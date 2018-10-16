// @flow
import React from 'react';
import {
  Image,
  Modal,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity as NativeButton,
} from 'react-native';

import THEMES from '../../Constants/colors';
import styles from './styles';

type Props = {
  selectTheme: (string) => void,
  selectedTheme: string,
  visible: boolean,
}

const ThemeSelector = ({ selectTheme, visible, selectedTheme }: Props) => {
  const THEME_IDS = Object.keys(THEMES);
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      style={styles.container}
    >
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView style={styles.scrollableView}>
            {
              THEME_IDS.map((id: string) => (
                <NativeButton
                  key={id}
                  style={{ ...styles.theme, backgroundColor: THEMES[id].backgroundColor }}
                  onPress={() => selectTheme(id)}
                >
                  <View style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'row' }}>
                    <Text style={{ ...styles.text, color: THEMES[id].textColor, marginRight: 'auto' }}>
                      {id}
                    </Text>
                    {
                      id === selectedTheme && (
                      <Image
                        source={require('../../../assets/select-theme.png')}
                        style={{ marginLeft: 'auto', width: 25, height: 25 }}
                      />
                      )
                    }
                  </View>
                </NativeButton>
              ))
            }
          </ScrollView>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default ThemeSelector;
