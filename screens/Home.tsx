import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SOLARIZED, RAINBOW, FRONTEND_MASTERS } from '../data/colors';
import PalettePreview from '../components/PalettePreview';
import Counter from '../components/Counter';
import { Palette } from '../types/colors';

const COLOR_PALETTES: Palette[] = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Rainbow', colors: RAINBOW },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={COLOR_PALETTES}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            handlePress={() => {
              navigation.navigate('ColorPalette', item);
            }}
            colorPalette={item}
          />
        )}
      />
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    flex: 1,
    gap: 10,
  },
  list: {
    flexGrow: 0,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
});

export default Home;
