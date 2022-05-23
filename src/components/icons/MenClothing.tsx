import React from "react";
import IonicIcon from "react-native-vector-icons/Ionicons";
import { IonicIconProps } from "utils/interface";

const MenClothing = ({ ...props }: Omit<IonicIconProps, "name">) => {
  return <IonicIcon name="shirt-outline" {...props} />;
};

export default MenClothing;
