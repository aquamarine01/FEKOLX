import React from "react";
import { View, FlatList, StyleSheet, Text, StatusBar } from "react-native";
import { COLOR_SCHEME } from "utils/constant";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MainItem = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      numColumns={2}
      horizontal={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        justifyContent: "space-between",
      }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLOR_SCHEME.DARK_BLUE,
    padding: 20,
    height: 150,
    width: 150,
  },
  title: {
    fontSize: 32,
  },
});

export default MainItem;
