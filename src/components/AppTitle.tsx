import React from "react";
import { Text, StyleSheet } from "react-native";
import { COLOR_SCHEME } from "utils/constant";

const AppTitle: React.FC = () => {
  return <Text style={styles.title}>FEKOLX</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
    justifyContent: "center",
    textAlign: "center",
    color: COLOR_SCHEME.WHITE_LIGHT,
    letterSpacing: 4,
    paddingTop: 50,
    paddingBottom: 30,
  },
});

export default AppTitle;
