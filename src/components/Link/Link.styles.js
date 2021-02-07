import styled from "styled-components/native";

import fonts from "@theme/fonts";
import colors from "@theme/colors";

import Text from "@components/Text";
import Icon from "@components/Icon";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StyledText = styled(Text)`
  color: ${colors.P11};
  font-family: ${fonts.nunitoBold};
`;

export const StyledIcon = styled(Icon)`
  margin-right: 8px;
`;
