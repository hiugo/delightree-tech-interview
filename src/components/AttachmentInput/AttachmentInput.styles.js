import styled from "styled-components/native";

import vars from "@theme/vars";
import colors from "@theme/colors";

import Text from "@components/Text";

export const Container = styled.View`
  flex: 1;
  min-height: ${`${vars.inputHeight}px`};
  flex-direction: row;
  align-items: center;
  padding: 0 ${`${vars.smallSpacing}px`};
  border: ${`${vars.borderWidth}px`} solid ${colors.N11};
  border-radius: ${`${vars.borderRadius}px`};
`;

export const InputText = styled(Text)`
  flex: 1;
  margin-left: 12px;
`;
