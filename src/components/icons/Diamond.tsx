import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeProps } from "utils/interface";

const Diamond = ({ ...props }: Omit<FontAwesomeProps, "name">) => {
  return <FontAwesome name="diamond" {...props} />;
};

export default Diamond;
