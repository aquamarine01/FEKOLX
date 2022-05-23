import React from "react";
import HomeScreen from "screens/HomeScreen";
import DetailScreen from "screens/DetailScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeStack } from "utils/interface";

const HomeStackScreen = () => {
  const Stack = createStackNavigator<HomeStack>();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
