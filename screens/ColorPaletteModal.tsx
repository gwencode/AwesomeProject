import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

const ColorPaletteModal = () => {
  const [name, setName] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Name of your color scheme</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
      </ScrollView>
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
    marginBottom: 10,
  },
});

export default ColorPaletteModal;
