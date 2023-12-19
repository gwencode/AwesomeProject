import React from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Palette } from '../types/colors';

type PalettePreviewProps = {
  handlePress: () => void;
  colorPalette: Palette;
};

const PalettePreview = ({ handlePress, colorPalette }: PalettePreviewProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.section} onPress={handlePress}>
        <Text style={styles.title}>{colorPalette.paletteName}</Text>
        <FlatList
          style={styles.list}
          data={colorPalette.colors.slice(0, 5)}
          keyExtractor={(item) => item.colorName}
          renderItem={({ item }) => (
            <View
              style={[styles.colorRectangle, { backgroundColor: item.hexCode }]}
            />
          )}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  list: {
    flexDirection: 'row',
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

export default PalettePreview;
