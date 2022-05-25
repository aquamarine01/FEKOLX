import AppTitle from 'components/baseComponent/AppTitle';
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { COLOR_SCHEME, DIMENSION } from 'utils/constant';
import { HomeProps } from 'utils/interface';

const TopContainer = ({ navigation }: Props) => {
  return (
    <TouchableOpacity style={{ position: 'relative' }} onPress={() => navigation.pop()}>
      <View style={styles.mainContainer}>
        <IonicIcon
          name="chevron-back"
          color={COLOR_SCHEME.DARK_BLUE}
          size={28}
          style={{ paddingLeft: 15 }}
        />
        <AppTitle
          paddingTop={15}
          paddingBottom={15}
          paddingLeft={10}
          color={COLOR_SCHEME.DARK_BLUE}
          textAlign={'left'}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: COLOR_SCHEME.WHITE_LIGHT,
    width: DIMENSION.WIDTH / 2,
    top: -70,
    left: -DIMENSION.PADDING_HORIZONTAL * 2,
    alignItems: 'center',
    position: 'absolute',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
});

type Props = HomeProps<'Detail'>;

export default TopContainer;
