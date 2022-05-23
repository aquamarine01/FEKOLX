import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeProps } from "utils/interface";

const MenClothing = ({ ...props }: Omit<FontAwesomeProps, "name">) => {
  return <FontAwesome name="shopping-bag" {...props} />;
};

export default MenClothing;
