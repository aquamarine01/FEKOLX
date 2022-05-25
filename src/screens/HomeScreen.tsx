import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import Container from 'components/baseComponent/Container';
import Home from 'components/homeScreen';
import AppTitle from 'components/baseComponent/AppTitle';
import { COLOR_SCHEME, DIMENSION, RESOURCE_NAME } from 'utils/constant';
import { getAllData as _getAllData } from 'store/actions/resources';
import { HomeProps } from 'utils/interface';

const HomeScreen = ({ getAllData, ...props }: Props) => {
  const [currentCategory, setCurrentCategory] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        await getAllData(RESOURCE_NAME.PRODUCTS, 'limit=all');
      } catch (err) {
        console.log(err);
      }
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <AppTitle paddingTop={50} />
      <View style={styles.mainContainer}>
        <Home.TopContainer
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        <Home.BottomContainer currentCategory={currentCategory} {...props} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLOR_SCHEME.WHITE_LIGHT,
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: DIMENSION.PADDING_HORIZONTAL * 2,
    borderTopLeftRadius: 50,
  },
});

const connector = connect(null, {
  getAllData: _getAllData,
});

type Props = ConnectedProps<typeof connector> & HomeProps<'Home'>;

export default connector(HomeScreen);
