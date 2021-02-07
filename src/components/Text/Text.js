import React from "react";

import { StyledText } from "./Text.styles";

const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
