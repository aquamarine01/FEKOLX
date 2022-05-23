import React from "react";
import IonicIcon from "react-native-vector-icons/Ionicons";
import { IonicIconProps } from "utils/interface";

const Electronic = ({ ...props }: Omit<IonicIconProps, "name">) => {
  return <IonicIcon name="desktop-sharp" {...props} />;
};

export default Electronic;
