import axios from '../axios'
import { Payload, Payloads } from 'store/reducers/resources';
import { ResourceName, Resources } from 'utils/interface';

export const setResource = <T extends ResourceName>(
  resourceName: T,
  payload: Payloads<Resources[T]>
) => ({
  type: `resources.${resourceName}.set`,
  payload,
});

export const updateResource = <T extends ResourceName>(
  resourceName: T,
  payload: Payload<Resources[T]>
) => ({
  type: `resources.${resourceName}.update`,
  payload, // { id, data }
});

export const overwriteResource = <T extends ResourceName>(
  resourceName: T,
  payload: Payloads<Resources[T]>
) => ({
  type: `resources.${resourceName}.overwrite`,
  payload,
});

export const deleteResource = <T extends ResourceName>(
  resourceName: T,
  payload: number
) => ({
  type: `resources.${resourceName}.delete`,
  payload, // id
});

export const getAllData =
  (resourceName: ResourceName, query: string = '', overwrite: boolean = true) =>
  async () => {
    await axios.get(`/${resourceName}?${query}`, {
      headers: {
        resourceName,
        // @ts-ignore
        overwrite,
      },
    });
  };

export const getDataById =
  <T extends ResourceName>(
    resourceName: T,
    id: number,
    query: string = '',
    overwrite: boolean = false
  ) =>
  async () => {
    const { data } = await axios.get(`/${resourceName}/${id}?${query}`, {
      headers: {
        resourceName,
        // @ts-ignore
        overwrite,
      },
    });

    return data;
  };
