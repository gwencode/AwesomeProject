import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <View>
      <Text style={styles.title}>Counter: {count}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleIncrement}>
          <Text style={styles.button}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDecrement}>
          <Text style={styles.button}>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    color: 'white',
  },
});

export default Counter;
