import React from 'react';
import _ from 'lodash';
import { StyleSheet, Text, View } from 'react-native';
import { COLOR_SCHEME, DEFAULT_PRODUCT } from 'utils/constant';
import { IProduct } from 'utils/interface';

const BottomContainer = ({ title, price, description }: IProduct) => {
  return (
    <View style={styles.mainContainer}>
      <Text numberOfLines={1} style={styles.productText}>
        {title ?? DEFAULT_PRODUCT.title}
      </Text>
      <Text style={[styles.productText, styles.priceTag]}>{`$ ${
        price ?? DEFAULT_PRODUCT.price
      }`}</Text>
      <View style={styles.textContainer}>
        <Text numberOfLines={10} style={styles.description}>
          {description ?? DEFAULT_PRODUCT.description}
        </Text>
      </View>
    </View>
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
    fontWeight: 'bold',
    fontSize: 18,
  },
  priceTag: {
    marginTop: 10,
    fontSize: 15,
  },
  description: {
    marginTop: 10,
    color: COLOR_SCHEME.WHITE_LIGHT,
    fontSize: 14,
    textAlign: 'justify',
  },
});

export default BottomContainer;
