import React from 'react';
import _ from 'lodash';
import { Image } from '@rneui/base';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { COLOR_SCHEME, DEFAULT_PRODUCT, DIMENSION } from 'utils/constant';
import { HomeProps, IProduct } from 'utils/interface';

const Product = ({ id, image, title, price, navigation }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() =>
          navigation.push('Detail', {
            productId: id,
          })
        }
      >
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
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // Multiple by 4 since padding by default being use in 4 sides (TRBL)
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
    marginTop: 10,
  },
  productText: {
    color: COLOR_SCHEME.WHITE_LIGHT,
    fontWeight: 'bold',
  },
  priceTag: {
    marginTop: 5,
  },
});

type Props = HomeProps<'Home'> & IProduct;

export default Product;
