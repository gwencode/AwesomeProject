import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ColorBoxProps = {
  colorName: string;
  hexCode: string;
};

const ColorBox = ({ colorName, hexCode }: ColorBoxProps) => {
  const boxColor = {
    backgroundColor: hexCode,
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.text}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorBox;
