import React from "react";
import { TouchableOpacity } from "react-native";

import { Container, StyledText, StyledIcon } from "./Link.styles";

const Link = ({ children, icon, onPress, ...props }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Container {...props}>
        {icon && <StyledIcon name={icon} variant="link" />}
        <StyledText>{children}</StyledText>
      </Container>
    </TouchableOpacity>
  );

  function handlePress() {
    onPress?.();
  }
};

export default Link;
