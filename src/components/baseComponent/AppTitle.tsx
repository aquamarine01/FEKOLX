import React from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import { COLOR_SCHEME, FONTS } from 'utils/constant';

const AppTitle = (style: StyleProp<TextStyle>) => <Text style={[styles.title, style]}>FEKOLX</Text>;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    justifyContent: 'center',
    textAlign: 'center',
    color: COLOR_SCHEME.WHITE_LIGHT,
    letterSpacing: 4,
    paddingBottom: 20,
    fontFamily: FONTS.KOULEN_REGULAR,
  },
});

export default AppTitle;
