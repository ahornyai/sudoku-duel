import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const SudokuGrid = () => {
  const grid = createRandomGrid();
  const unmodifiableElements = [
    [1, 1], [5, 2], [6, 8], [2, 3]
  ]
  const selectedElement = [5, 5];
  const gridElement = [];

  for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
      /*const isUnmodifiable = unmodifiableElements.some(
        (element) => element[0] === i && element[1] === j
      );*/
      const isUnmodifiable = Math.random() > 0.5;
      const isSelected = selectedElement[0] === i && selectedElement[1] === j;
      const isSameAsSelected = isSelected || grid[i][j] === grid[selectedElement[0]][selectedElement[1]];
      const isHighlighted = i == selectedElement[0] 
        || j == selectedElement[1] 
        || (Math.floor(i / 3) === Math.floor(selectedElement[0] / 3) && Math.floor(j / 3) === Math.floor(selectedElement[1] / 3));

      row.push(
        <View
          key={i * 9 + j}
          style={[
            styles.cell,
            { 
              // border settings
              borderLeftWidth: j % 3 === 0 ? 3 : 1,
              borderTopWidth: i % 3 === 0 ? 3 : 1,
              borderRightWidth: j === 8 ? 3 : 1,
              borderBottomWidth: i === 8 ? 3 : 1,

              backgroundColor: isSameAsSelected ? "#1e4972" : (isHighlighted ? '#232323': '#1b1b1b'),
            },
          ]}
        >
          {grid[i][j] !== -1 && 
            <Text style={{
              color: isUnmodifiable ? '#fff' : '#0072e3',
              fontSize: 30,
              textAlign: 'center',
              includeFontPadding: false,
            }}>{grid[i][j]}</Text>
          }
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
      {gridElement}
    </View>
  );
};

const createRandomGrid = () => {
  const grid = [];

  for (let i = 0; i < 9; i++) {
    const row = [];

    for (let j = 0; j < 9; j++) {
      row.push(Math.floor(Math.random() * 10) - 1);
    }

    grid.push(row);
  }

  return grid;
}

const styles = StyleSheet.create({
  // style the grid
  sudokuGrid: {
    width: '90%',
    aspectRatio: 1,
    marginVertical: 20,
  },
  cell: {
    height: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
    borderColor: "#606060",
  }
});