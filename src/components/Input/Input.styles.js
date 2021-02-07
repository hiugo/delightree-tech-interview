import styled from "styled-components/native";

import fonts from "@theme/fonts";
import vars from "@theme/vars";
import colors from "@theme/colors";

import Text from "@components/Text";

export const Container = styled.View`
  min-height: ${`${vars.inputHeight}px`};
  flex-direction: row;
  align-items: center;
  padding: 0 ${`${vars.smallSpacing}px`};
  border: ${`${vars.borderWidth}px`} solid ${colors.N11};
  border-radius: ${`${vars.borderRadius}px`};
  position: relative;
`;

export const StyledInput = styled.TextInput`
  flex: 1;
  font-family: ${fonts.nunitoRegular};
  font-size: ${`${vars.fontBaseSize}px`};

  ${({ isMultiline }) =>
    isMultiline &&
    `
      height: auto;
      min-height: ${`${vars.inputMultilineHeight}px`};
      margin-top: 8px;
      margin-bottom: 20px;
    `}
`;

export const WordCount = styled(Text)`
  position: absolute;
  bottom: 4px;
  right: 8px;
  font-size: ${`${vars.fontXSmallSize}px`};
  font-family: ${fonts.nunitoBold};
`;
