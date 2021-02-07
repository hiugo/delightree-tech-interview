import styled from "styled-components/native";

import fonts from "@theme/fonts";
import vars from "@theme/vars";
import colors from "@theme/colors";

import Text from "@components/Text";

export const Container = styled.View`
  border-radius: ${`${vars.borderRadius}px`};
  overflow: hidden;
  width: 100%;
`;

export const StyledPressable = styled.Pressable`
  flex: 1;
`;

export const Content = styled.View`
  height: ${`${vars.buttonHeight}px`};
  background-color: ${colors.P11};
  justify-content: center;
  align-items: center;
  border-radius: ${`${vars.borderRadius}px`};
  overflow: hidden;
  padding-left: ${`${vars.baseSpacing}px`};
  padding-right: ${`${vars.baseSpacing}px`};

  ${({ isDisabled }) =>
    isDisabled &&
    `
    background-color: ${colors.P10};
  `}
`;

export const StyledText = styled(Text)`
  font-family: ${fonts.nunitoBold};
  color: ${colors.N10};
`;
