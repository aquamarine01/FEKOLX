import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { COLOR_SCHEME } from "../utils/constant";
import MainItem from "./MainItem";

const MainContainer = () => {
  return (
    <View style={styles.bgcontainer}>
      <View>
        <Text style={styles.subTitle}>KATEGORI</Text>
      </View>
      <View style={styles.outbox}>
        <View style={styles.box}>
          <Text>INI KOTAK</Text>
        </View>
        <View style={styles.box}>
          <Text>INI KOTAK</Text>
        </View>
        <View style={styles.box}>
          <Text>INI KOTAK</Text>
        </View>
        <View style={styles.box}>
          <Text>INI KOTAK</Text>
        </View>
      </View>
      <View>
        <Text style={styles.subTitle}>UNTUK KAMU</Text>
      </View>
      <View>
        <MainItem />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgcontainer: {
    backgroundColor: COLOR_SCHEME.WHITE_LIGHT,
    height: "100%",
    borderTopLeftRadius: 50,
    paddingTop: 15,
    paddingLeft: 20,
  },
  subTitle: {
    paddingBottom: 20,
    paddingTop: 20,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 2,
    color: COLOR_SCHEME.BLACK_PITCH,
  },
  outbox: {
    flexDirection: "row",
  },
  box: {
    backgroundColor: COLOR_SCHEME.DARK_BLUE,
    marginRight: 20,
    height: 80,
    width: 80,
  },
});

export default MainContainer;
