import React from "react";
import { Provider } from "react-redux";
import store from "store";
import MainNavigator from "./src/navigation/MainNavigator";

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
