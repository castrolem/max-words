// @flow
import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import THEMES from '../../Constants/colors';

type Props = {
  setTheme: (string) => void,
  visible: boolean,
};

const THEME_IDS = Object.keys(THEMES);

const ThemeChooser = ({
  setTheme,
  visible,
}: Props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={visible}
  >
    <View style={{ marginTop: 22 }}>
      {
        THEME_IDS.map((themeId: string) => (
          <TouchableOpacity
            key={themeId}
            onPress={() => setTheme(themeId)}
          >
            <View>
              <Text>{themeId}</Text>
            </View>
          </TouchableOpacity>
        ))
      }
    </View>
  </Modal>
);

export default ThemeChooser;
