import _ from 'lodash';
import { hasOwnProperty } from '../../utils/typeHelper';
import { IResources, ResourceName, Resources } from '../../utils/interface';
import { RESOURCE_NAME } from 'utils/constant';
import { combineReducers } from 'redux';

export type Payload<K> = {
  id: number;
  data: K;
};

export type Payloads<T> = T | T[];

export interface IAction<T extends ResourceName> {
  type: string;
  payload: Payload<Resources[T]> | Payloads<Resources[T]> | number;
}

const reducer =
  <T extends ResourceName>(resourceName: T) =>
  (state: IResources[T] = {}, action: IAction<T>): IResources[T] => {
    let temp: IResources[T] = {};

    switch (action.type) {
      case `resources.${resourceName}.set`:
        if (
          _.isNumber(action.payload) ||
          hasOwnProperty(action.payload, 'data')
        )
          return state;

        const data = _.isArray(action.payload)
          ? action.payload
          : [action.payload];

        return {
          ...state,
          ..._.keyBy(data, 'id'),
        };

      case `resources.${resourceName}.update`:
        if (
          _.isArray(action.payload) ||
          _.isNumber(action.payload) ||
          !hasOwnProperty(action.payload, 'data')
        )
          return state;

        return {
          ...state,
          [action.payload.id]: action.payload.data,
        };

      case `resources.${resourceName}.delete`:
        if (!_.isNumber(action.payload)) return state;

        temp = _.cloneDeep(state);

        delete temp[action.payload];
        return temp;

      case `resources.${resourceName}.overwrite`:
        if (
          _.isNumber(action.payload) ||
          hasOwnProperty(action.payload, 'data')
        )
          return state;

        const data1 = _.isArray(action.payload)
          ? action.payload
          : [action.payload];

        const _data1 = _.keyBy(data1, 'id') as IResources[T];

        return {
          ..._data1,
        };

      default:
        return state;
    }
  };

const allReducer: Record<ResourceName, any> = {} as any;

_.forEach(RESOURCE_NAME, (resName: ResourceName) => {
  allReducer[resName] = reducer(resName);
});

export default combineReducers<IResources>(allReducer);
