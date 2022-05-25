import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeProps } from 'utils/interface';

const MenClothing = ({ ...props }: Omit<FontAwesomeProps, 'name'>) => (
  <FontAwesome name="shopping-bag" size={48} color={'white'} {...props} />
);

export default MenClothing;
