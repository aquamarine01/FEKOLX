import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLOR_SCHEME } from 'utils/constant';

const Container = ({ children }: { children?: React.ReactNode }) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_SCHEME.DARK_BLUE,
    flex: 1,
  },
});

export default Container;
