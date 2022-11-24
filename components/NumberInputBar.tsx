import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const NumberInputBar = () => {
  const numberElements = [];

  for (let i = 1; i <= 9; i++) {
    numberElements.push(
      <View key={i} style={styles.numberCell}>
        <Text style={styles.numberText}>{i}</Text>
        <Text style={styles.countText}>{ Math.floor(Math.random()*100) }</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {numberElements}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  numberCell: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
    margin: 2,
  },
  numberText: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    includeFontPadding: false,
  },
  countText: {
    color: "#606060",
    fontSize: 10,
    textAlign: "center",
    includeFontPadding: false,
  },
});