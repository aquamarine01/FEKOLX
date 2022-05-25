import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeProps } from 'utils/interface';

const Diamond = ({ ...props }: Omit<FontAwesomeProps, 'name'>) => (
  <FontAwesome name="diamond" size={48} color={'white'} {...props} />
);

export default Diamond;
