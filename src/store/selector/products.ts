import _ from 'lodash';
import { createSelector } from 'reselect';
import { RootState } from '..';

export const getProducts = (state: RootState) => state.products;

export const getProductsById = (state: RootState, id: number) =>
  state.products[id];

export const getProductsByCategory = (category: string) =>
  _.keyBy(
    createSelector(getProducts, (products) =>
      _.filter(products, (product) => product.category === category)
    ),
    'id'
  );
