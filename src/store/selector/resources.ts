import _ from 'lodash';
import { IResources, ResourceName } from 'utils/interface';
import { RootState } from '..';

export const getResource =
  <T extends ResourceName>(resourceName: T) =>
  (state: RootState): IResources[T] =>
    state.resources[resourceName];

export const getResourceById =
  <T extends ResourceName>(resourceName: T, id: number) =>
  (state: RootState) =>
    state.resources[resourceName][id];
