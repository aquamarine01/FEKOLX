import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreenStack from "./HomeScreenStack";

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={"#16013E"} />
      <HomeScreenStack />
    </NavigationContainer>
  );
};

export default MainNavigator;
