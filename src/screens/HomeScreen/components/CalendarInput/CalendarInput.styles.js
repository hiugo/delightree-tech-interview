import styled from "styled-components/native";

import vars from "@theme/vars";
import colors from "@theme/colors";

import Text from "@components/Text";

export const Container = styled.View`
  height: ${`${vars.inputHeight}px`};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${`${vars.smallSpacing}px`};
  border: ${`${vars.borderWidth}px`} solid ${colors.N11};
  border-radius: ${`${vars.borderRadius}px`};
`;

export const InputText = styled(Text)`
  color: ${({ isGray }) => (isGray ? colors.N12 : colors.N14)};
`;
