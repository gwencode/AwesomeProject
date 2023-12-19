import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styles.pink]}>
        <Text>Hello World</Text>
        {/* <Text style={styles.red}>Hello World</Text> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pink: {
    backgroundColor: 'pink',
  },
  // red: {
  //   backgroundColor: 'red',
  // },
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});

export default App;
