import React from 'react';
import _ from 'lodash';
import { FlatList, StyleSheet, View } from 'react-native';
import { RootState } from 'store';
import { connect, ConnectedProps } from 'react-redux';
import Product from 'components/baseComponent/Product';
import { getResource } from 'store/selector/resources';
import { RESOURCE_NAME } from 'utils/constant';
import { HomeProps } from 'utils/interface';

const BottomContainer = ({ products, currentCategory, ...props }: Props) => {
  const getProducts = () => {
    if (currentCategory === '') return products;

    return _.filter(products, ['category', currentCategory]);
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={_.toArray(getProducts())}
        renderItem={({ item }) => <Product key={item.id} {...item} {...props} />}
        keyExtractor={({ id }) => `${id}`}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

const mapStateToProps = (state: RootState) => ({
  products: getResource(RESOURCE_NAME.PRODUCTS)(state),
});

const connector = connect(mapStateToProps);

type ReduxProps = ConnectedProps<typeof connector>;

type Props = ReduxProps &
  HomeProps<'Home'> & {
    currentCategory: string;
  };

export default connector(BottomContainer);
