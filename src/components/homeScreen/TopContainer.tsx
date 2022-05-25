import _ from 'lodash';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Category from 'components/baseComponent/Category';
import { CATEGORY } from 'utils/constant';
import { ReactSetter } from 'utils/interface';

const TopContainer = ({ currentCategory, setCurrentCategory }: Props) => {
  return (
    <FlatList
      data={_.toArray(CATEGORY)}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Category
          category={item}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      )}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        height: 120,
        alignItems: 'center',
      }}
      numColumns={_.size(CATEGORY)}
      style={styles.mainContainer}
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 0,
  },
});

type Props = {
  currentCategory: string;
  setCurrentCategory: ReactSetter<string>;
};

export default TopContainer;
