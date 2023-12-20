import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
// import { SOLARIZED, RAINBOW, FRONTEND_MASTERS } from '../data/colors';
import PalettePreview from '../components/PalettePreview';
import Counter from '../components/Counter';
import { Palette } from '../types/colors';

// const COLOR_PALETTES: Palette[] = [
//   { paletteName: 'Solarized', colors: SOLARIZED },
//   { paletteName: 'Rainbow', colors: RAINBOW },
//   { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
// ];

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState<Palette[]>([]);

  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    if (result.ok) {
      const palettes = await result.json();
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    // Simulate a delay with setTimeout
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, [fetchColorPalettes]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={colorPalettes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PalettePreview
            handlePress={() => {
              navigation.navigate('ColorPalette', item);
            }}
            colorPalette={item}
          />
        )}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
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
