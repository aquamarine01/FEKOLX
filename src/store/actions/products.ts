import { IProduct } from '../../utils/interface';
import { PRODUCT_ACTION } from '../../utils/constant';

export const setProducts = (payload: IProduct[]) => ({
  type: PRODUCT_ACTION.SET_PRODUCTS,
  payload,
});

export const updateProduct = (id: number, data: IProduct) => ({
  type: PRODUCT_ACTION.UPDATE_PRODUCT,
  payload: {
    id,
    data,
  },
});

export const deleteProduct = (id: number) => ({
  type: PRODUCT_ACTION.DELETE_PRODUCT,
  payload: id,
});
