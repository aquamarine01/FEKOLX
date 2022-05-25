import React from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { StackScreenProps } from '@react-navigation/stack';
import { RESOURCE_NAME } from './constant';

export type ResourceName = typeof RESOURCE_NAME[keyof typeof RESOURCE_NAME];

export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface IUser {
  id: number;
  email: String;
  username: String;
  password: String;
  name: {
    firstname: String;
    lastname: String;
  };
  address: {
    city: String;
    street: String;
    number: Number;
    zipcode: String;
    geolocation: {
      lat: String;
      long: String;
    };
  };
  phone: String;
}

export interface ICartProduct {
  productId: number;
  quantity: number;
}

export interface ICart {
  id: number;
  userId: number;
  date: Date;
  products: ICartProduct[];
}

export interface IAction<T> {
  type: string;
  data: T;
}

export type FlexibleResource<T> = {
  [key: number]: T;
};

export interface Resources {
  carts: ICart;
  products: IProduct;
  users: IUser;
}

export interface IResources {
  carts: FlexibleResource<ICart>;
  products: FlexibleResource<IProduct>;
  users: FlexibleResource<IUser>;
}

export type HomeStack = {
  Home: {
    screen?: keyof HomeStack;
  };
  Detail: {
    productId: number;
    screen?: keyof HomeStack;
  };
};

export type HomeProps<T extends keyof HomeStack> = StackScreenProps<HomeStack, T>;

export type FontAwesomeProps = typeof FontAwesomeIcon.prototype.props;
export type IonicIconProps = typeof IonicIcon.prototype.props;

export type ReactSetter<T> = React.Dispatch<React.SetStateAction<T>>;
