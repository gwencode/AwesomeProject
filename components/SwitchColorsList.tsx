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
          <Text>{item.colorName}</Text>
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
  switchInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: 'grey',
    borderTopWidth: 1,
    paddingVertical: 10,
  },
});

export default SwitchColorsList;
