import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const SudokuGrid = () => {
  const grid = [
    [0, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const gridElement = [];

  for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
      row.push(
        <View
          key={i * 9 + j}
          style={[
            styles.cell,
            { // border settings
              borderLeftWidth: j % 3 === 0 ? 3 : 1,
              borderTopWidth: i % 3 === 0 ? 3 : 1,
              borderRightWidth: j === 8 ? 3 : 1,
              borderBottomWidth: i === 8 ? 3 : 1,
            },
          ]}
        >
          <Text style={styles.cellText}>{grid[i][j]}</Text>
        </View>
      );
    }
    
    gridElement.push(
      <View key={i} style={styles.cell}>
        {row}
      </View>
    );
  }

  return (
    <View style={styles.sudokuGrid}>
      { gridElement }
    </View>
  );
};

const styles = StyleSheet.create({
  // style the grid
  sudokuGrid: {
    backgroundColor: "#282A3A",
    width: '95%',
    aspectRatio: 1,
    borderWidth: 3,
    padding: 0,
  },
  cell: {
    height: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "silver",
  },
  cellText: {
    color: "#fff",
    fontSize: 20,
  },
});