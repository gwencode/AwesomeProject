import React from 'react';
import {
  FlatList,
  StyleSheet,
  Switch,
  SwitchChangeEvent,
  Text,
  View,
} from 'react-native';

import { Color } from '../types/colors';

type SwitchColorsListProps = {
  handleSwitch: (event: SwitchChangeEvent, color: Color) => void;
  items: Color[];
};

const SwitchColorsList = ({ items, handleSwitch }: SwitchColorsListProps) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <View style={styles.switchInput}>
          <View style={styles.colorPreview}>
            <View
              style={[styles.colorRectangle, { backgroundColor: item.hexCode }]}
            />
            <Text>{item.colorName}</Text>
          </View>
          <Switch
            value={item.selected}
            onChange={(event) => handleSwitch(event, item)}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  colorPreview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: 'grey',
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  colorRectangle: {
    height: 30,
    width: 30,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default SwitchColorsList;
