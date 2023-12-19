import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Here are some boxes of different colors
        </Text>
        <ColorBox colorName="Cyan" hexCode="#2aa198" />
        <ColorBox colorName="Blue" hexCode="#268bd2" />
        <ColorBox colorName="Magenta" hexCode="#d33682" />
        <ColorBox colorName="Orange" hexCode="#cb4b16" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
});

export default App;
