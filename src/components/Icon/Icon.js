import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "@theme/colors";

const Icon = ({ name, size = 18, variant = "regular", ...props }) => {
  let color = colors.N14;

  if (variant === "inverted") {
    color = colors.N10;
  } else if (variant === "danger") {
    color = colors.D10;
  } else if (variant === "gray") {
    color = colors.N12;
  } else if (variant === "link") {
    color = colors.P11;
  }

  return <FontAwesome5 {...{ name, size, color }} {...props} />;
};

export default Icon;
