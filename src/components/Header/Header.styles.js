import styled from "styled-components/native";

import colors from "@theme/colors";
import vars from "@theme/vars";
import fonts from "@theme/fonts";

import Text from "@components/Text";

export const Container = styled.View`
  background-color: ${colors.P11};
  padding: ${({ safeAreaTop }) => `
        ${vars.largeSpacing + safeAreaTop}px
        ${vars.baseSpacing}px
        ${vars.largeSpacing}px
    `};
`;

export const Content = styled.View`
  min-height: 34px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled(Text)`
  color: ${colors.N10};
  font-size: ${`${vars.fontLargeSize}px`};
  font-family: ${fonts.nunitoBold};
  flex-shrink: 1;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  ${({ isRight }) => (isRight ? "margin-left: 12px" : "margin-right: 12px")};
`;
