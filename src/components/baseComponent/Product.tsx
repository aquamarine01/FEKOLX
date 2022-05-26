import React from 'react';
import _ from 'lodash';
import { Image } from '@rneui/base';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { COLOR_SCHEME, DEFAULT_PRODUCT, DIMENSION, FONTS } from 'utils/constant';
import { HomeProps, IProduct } from 'utils/interface';

const Product = ({ id, image, title, price, navigation }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        navigation.push('Detail', {
          productId: id,
        })
      }
    >
      <View style={styles.mainContainer}>
        <Image
          source={{
            uri: image ?? DEFAULT_PRODUCT.image,
          }}
          style={styles.imageContainer}
        />
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.productText}>
            {title ?? DEFAULT_PRODUCT.title}
          </Text>
          <Text style={[styles.productText, styles.priceTag]}>{`$ ${
            price ?? DEFAULT_PRODUCT.price
          }`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: (DIMENSION.WIDTH - DIMENSION.PADDING_HORIZONTAL * 6) / 2,
    padding: 5,
    height: 225,
    backgroundColor: COLOR_SCHEME.DARK_BLUE,
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    margin: 5,
  },
  imageContainer: {
    width: 165,
    height: 125,
    resizeMode: 'center',
    borderRadius: 10,
  },
  textContainer: {
    width: '100%',
    marginTop: 10,
  },
  productText: {
    color: COLOR_SCHEME.WHITE_LIGHT,
    fontFamily: FONTS.UBUNTU_BOLD,
  },
  priceTag: {
    marginTop: 5,
  },
});

type Props = HomeProps<'Home'> & IProduct;

export default Product;
