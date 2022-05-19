import _ from 'lodash';
import { hasOwnProperty } from '../../utils/typeHelper';
import { PRODUCT_ACTION } from '../../utils/constant';
import { IProduct } from '../../utils/interface';

type Payload = {
  id: number;
  data: IProduct;
};

type Payloads = IProduct[];

interface IAction {
  type: string;
  payload: Payload | Payloads | number;
}

type Products = Record<number, IProduct>;

const initialState: Products = {};

const products = (state = initialState, action: IAction): Products => {
  let temp: Products = {};

  switch (action.type) {
    case PRODUCT_ACTION.SET_PRODUCTS:
      if (!_.isArray(action.payload) || _.isNumber(action.payload))
        return state;

      const data = _.isArray(action.payload)
        ? action.payload
        : [action.payload];

      return {
        ...state,
        ..._.keyBy(data, 'id'),
      };
    case PRODUCT_ACTION.UPDATE_PRODUCT:
      if (!hasOwnProperty(action.payload, 'data') || _.isNumber(action.payload))
        return state;

      return {
        ...state,
        [action.payload.id]: action.payload.data,
      };
    case PRODUCT_ACTION.OVERWRITE_PRODUCT:
      if (!_.isArray(action.payload) || _.isNumber(action.payload))
        return state;

      const data1 = _.isArray(action.payload)
        ? action.payload
        : [action.payload];

      return {
        ..._.keyBy(data1, 'id'),
      };
    case PRODUCT_ACTION.DELETE_PRODUCT:
      if (!_.isNumber(action.payload)) return state;

      temp = _.cloneDeep(state);

      delete temp[action.payload];
      return temp;
    default:
      return state;
  }
};

export default products;
