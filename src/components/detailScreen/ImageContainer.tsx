import React from 'react';
import { Image } from '@rneui/base';
import { StyleSheet, View } from 'react-native';
import { IProduct } from 'utils/interface';
import { DEFAULT_PRODUCT } from 'utils/constant';

const ImageContainer = ({ image }: Partial<IProduct>) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={{
          uri: image ?? DEFAULT_PRODUCT.image,
        }}
        style={styles.imageContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
  },
  imageContainer: {
    height: 250,
    resizeMode: 'center',
    borderRadius: 25,
  },
});

export default ImageContainer;
