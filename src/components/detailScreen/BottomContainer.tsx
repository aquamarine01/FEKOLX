import React from 'react';
import _ from 'lodash';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { COLOR_SCHEME, DEFAULT_PRODUCT, FONTS } from 'utils/constant';
import { IProduct } from 'utils/interface';

const BottomContainer = ({ title, price, description }: IProduct) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.productText}>{title ?? DEFAULT_PRODUCT.title}</Text>
      <Text style={[styles.productText, styles.priceTag]}>{`$ ${
        price ?? DEFAULT_PRODUCT.price
      }`}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.description}>{description ?? DEFAULT_PRODUCT.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    flex: 1,
  },
  textContainer: {
    marginTop: 10,
  },
  productText: {
    color: COLOR_SCHEME.WHITE_LIGHT,
    fontFamily: FONTS.UBUNTU_BOLD,
    fontSize: 18,
  },
  priceTag: {
    marginTop: 10,
    fontSize: 15,
  },
  description: {
    marginTop: 10,
    fontFamily: FONTS.UBUNTU_REGULAR,
    color: COLOR_SCHEME.WHITE_LIGHT,
    fontSize: 14,
    textAlign: 'justify',
  },
});

export default BottomContainer;
