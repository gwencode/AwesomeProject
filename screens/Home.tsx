import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PalettePreview from '../components/PalettePreview';
import Counter from '../components/Counter';
import { Palette } from '../types/colors';

const Home = ({ navigation, route }) => {
  const newColorPalette: Palette = route.params
    ? route.params.newColorPalette
    : undefined;

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

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes((palettes) => [newColorPalette, ...palettes]);
    }
  }, [newColorPalette]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={colorPalettes}
        keyExtractor={(item) => item.paletteName}
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
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ColorPaletteModal');
            }}
          >
            <Text style={styles.title}>Add a color scheme</Text>
          </TouchableOpacity>
        }
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
    color: 'teal',
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Home;
