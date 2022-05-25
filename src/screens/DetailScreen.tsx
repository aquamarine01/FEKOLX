import React from 'react';
import { StyleSheet, View } from 'react-native';
import Container from 'components/baseComponent/Container';
import { COLOR_SCHEME, DIMENSION, RESOURCE_NAME } from 'utils/constant';
import Detail from 'components/detailScreen';
import { HomeProps } from 'utils/interface';
import { RootState } from 'store';
import { getResourceById } from 'store/selector/resources';
import { connect, ConnectedProps } from 'react-redux';

const DetailScreen = ({ product, ...props }: Props) => {
  return (
    <Container>
      <View style={styles.mainContainer}>
        <Detail.TopContainer {...props} />
        <Detail.ImageContainer {...product} />
        <Detail.BottomContainer {...product} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLOR_SCHEME.DARK_BLUE,
    flex: 1,
    paddingTop: 85,
    paddingHorizontal: DIMENSION.PADDING_HORIZONTAL * 2,
    borderTopLeftRadius: 50,
  },
});

const mapStateToProps = (state: RootState, { route }: HomeProps<'Detail'>) => ({
  product: getResourceById(RESOURCE_NAME.PRODUCTS, route.params.productId)(state),
});

const connector = connect(mapStateToProps);

type ReduxProps = ConnectedProps<typeof connector>;

type Props = ReduxProps & HomeProps<'Detail'>;

export default connector(DetailScreen);
