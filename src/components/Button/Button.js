import React from "react";
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";

import colors from "@theme/colors";

import { Container, Content, StyledText } from "./Button.styles";

const Button = ({ isDisabled, onPress, children, ...props }) => {
  return <Container {...props}>{renderTouchable()}</Container>;

  function renderTouchable() {
    if (Platform.OS === "ios") {
      return (
        <TouchableOpacity disabled={isDisabled} {...{ onPress }}>
          {renderContent()}
        </TouchableOpacity>
      );
    }

    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(colors.P12)}
        disabled={isDisabled}
        {...{ onPress }}
      >
        {renderContent()}
      </TouchableNativeFeedback>
    );
  }

  function renderContent() {
    return (
      <Content {...{ isDisabled }}>
        <StyledText>{children}</StyledText>
      </Content>
    );
  }
};

export default Button;
