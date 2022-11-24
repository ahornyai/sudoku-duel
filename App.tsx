import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NumberInputBar } from './components/NumberInputBar';
import { SudokuGrid } from './components/SudokuGrid';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sudoku</Text>
      <SudokuGrid />
      <NumberInputBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingTop: 50,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
