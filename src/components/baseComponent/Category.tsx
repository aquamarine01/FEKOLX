import CategoryIcon from 'components/icons';
import _ from 'lodash';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CATEGORY, COLOR_SCHEME } from 'utils/constant';
import { ReactSetter } from 'utils/interface';

const Category = ({ category, currentCategory, setCurrentCategory }: Props) => {
  // Convert category to the correct type
  const getCategory = () => {
    if (!_.includes(CATEGORY, category)) return CATEGORY.ELECTRONICS;

    return category as typeof CATEGORY[keyof typeof CATEGORY];
  };

  // Capitalize the first letter of the category foreach word
  const capitalizeAfterSpaces = (str: string) => str.split(' ').map(_.capitalize).join(' ');

  return (
    <TouchableOpacity
      onPress={() => {
        if (category === currentCategory) {
          setCurrentCategory('');
          return;
        }

        setCurrentCategory(category);
      }}
    >
      <View style={styles.mainContainer}>
        <View style={styles.iconContainer}>
          <CategoryIcon category={getCategory()} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.category}>{capitalizeAfterSpaces(category)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: 80,
    height: 100,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: COLOR_SCHEME.DARK_BLUE,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  iconContainer: {
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: COLOR_SCHEME.LIGHT_BLUE,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  category: {
    color: COLOR_SCHEME.DARK_BLUE,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

type Props = {
  category: string;
  currentCategory: string;
  setCurrentCategory: ReactSetter<string>;
};

export default Category;
