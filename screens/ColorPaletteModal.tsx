import React, { useState, useCallback } from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Switch,
  SwitchChangeEvent,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Color, Palette } from '../types/colors';
import { COLORS } from '../data/colors';

const ColorPaletteModal = ({ navigation }) => {
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

  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert('Please enter a name for your color scheme');
    } else {
      const filteredColors = colors.filter((color) => color.selected);
      if (filteredColors.length < 3) {
        Alert.alert('Please select at least 3 colors');
        return;
      }
      const newColorPalette: Palette = {
        paletteName: name,
        colors: filteredColors,
      };
      console.log(newColorPalette);
      navigation.navigate('Home', { newColorPalette });
    }
  }, [colors, name, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.name}>Name of your color scheme</Text>
      <TextInput style={styles.textInput} value={name} onChangeText={setName} />
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
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
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
  name: {
    color: 'black',
    marginBottom: 10,
  },
  textInput: {
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
  submitButton: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorPaletteModal;
