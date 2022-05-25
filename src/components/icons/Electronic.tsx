import React from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { IonicIconProps } from 'utils/interface';

const Electronic = ({ ...props }: Omit<IonicIconProps, 'name'>) => (
  <IonicIcon name="desktop-sharp" size={45} color={'white'} {...props} />
);

export default Electronic;
