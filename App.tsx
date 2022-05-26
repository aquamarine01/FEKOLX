import React from 'react';
import { TextProps } from 'react-native';
import { Provider } from 'react-redux';
import store from 'store';
import { setCustomText } from 'next-rn-global-props';
import { FONTS } from 'utils/constant';
import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
  const customTextProps: TextProps = {
    style: {
      fontFamily: FONTS.UBUNTU_REGULAR,
      color: 'white',
    },
    allowFontScaling: false,
  };

  setCustomText(customTextProps);

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
