import React from "react";
import { StyleSheet, View } from "react-native";
import AppTitle from "components/AppTitle";
import MainContainer from "components/MainContainer";

const DetailScreen = () => {
  return (
    <View style={styles.bg}>
      <AppTitle />
      <MainContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#1171B7",
    height: "100%",
  },
});

export default DetailScreen;
