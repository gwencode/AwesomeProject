import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Here are some boxes of different colors
        </Text>
        <Text style={[styles.box, styles.cyan]}>Cyan</Text>
        <Text style={[styles.box, styles.blue]}>Blue</Text>
        <Text style={[styles.box, styles.magenta]}>Magenta</Text>
        <Text style={[styles.box, styles.orange]}>Orange</Text>
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
  box: {
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
});

export default App;
