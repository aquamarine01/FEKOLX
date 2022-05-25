import React from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { IonicIconProps } from 'utils/interface';

const MenClothing = ({ ...props }: Omit<IonicIconProps, 'name'>) => (
  <IonicIcon name="shirt-outline" size={45} color={'white'} {...props} />
);

export default MenClothing;
