import styled from "styled-components/native";

import vars from "@theme/vars";
import fonts from "@theme/fonts";
import colors from "@theme/colors";

import Text from "@components/Text";
import ProfilePhoto from "@components/ProfilePhoto";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: #fff;
`;

export const Content = styled.View`
  flex: 1;
  padding: ${`${vars.largeSpacing}px ${vars.baseSpacing}px`};
  justify-content: flex-start;
`;

export const Block = styled.View`
  margin-bottom: ${`${vars.largeSpacing}px`};
`;

export const ButtonWrapper = styled.View`
  padding: ${({ safeArea }) => `
        ${vars.largeSpacing}px
        ${vars.baseSpacing}px
        ${vars.baseSpacing + safeArea}px
    `};
`;

export const EmployeeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${`${vars.baseSpacing}px`};
`;

export const EmployeeNameWrapper = styled.View``;

export const EmployeeName = styled(Text)`
  font-family: ${fonts.nunitoBold};
`;

export const EmployeePosition = styled(Text)`
  color: ${colors.N12};
  font-size: ${`${vars.fontSmallSize}px`};
  margin-top: 4px;
`;

export const StyledProfilePhoto = styled(ProfilePhoto)`
  margin-right: 12px;
`;
