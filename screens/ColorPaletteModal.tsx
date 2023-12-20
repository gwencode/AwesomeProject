import React, { useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Switch,
  SwitchChangeEvent,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Color } from '../types/colors';
import { COLORS } from '../data/colors';

const ColorPaletteModal = () => {
  const [name, setName] = useState<string>('');

  const selectedColors: Color[] = COLORS.map((color: Color) => ({
    ...color,
    selected: false,
  }));

  const [colors, setColors] = useState<Color[]>(selectedColors);

  const handleSwitchChange = (event: SwitchChangeEvent, color: Color) => {
    const selected = event.nativeEvent.value;
    const newSelectedColors: Color[] = colors.map((c) => {
      if (c.colorName === color.colorName) {
        return { ...color, selected };
      }
      return c;
    });
    setColors(newSelectedColors);
  };

  const handleSubmit = () => {
    const filteredColors = colors.filter((color) => color.selected);
    console.log(filteredColors);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Name of your color scheme</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <FlatList
        data={colors}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={styles.switchInput}>
            <Text>{item.colorName}</Text>
            <Switch
              value={item.selected}
              onChange={(event) => handleSwitchChange(event, item)}
            />
          </View>
        )}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  switchInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderTopColor: 'grey',
    borderTopWidth: 1,
    paddingVertical: 10,
  },
});

export default ColorPaletteModal;
