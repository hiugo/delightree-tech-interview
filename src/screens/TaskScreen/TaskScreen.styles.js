import styled from "styled-components/native";

import vars from "@theme/vars";
import fonts from "@theme/fonts";

import Text from "@components/Text";
import Icon from "@components/Icon";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: #fff;
`;

export const Content = styled.View`
  flex: 1;
  padding: ${`${vars.largeSpacing}px ${vars.baseSpacing}px`};
`;

export const Block = styled.View`
  margin-bottom: ${`${vars.largeSpacing}px`};
`;

export const Label = styled(Text)`
  font-family: ${fonts.nunitoBold};
  margin-bottom: ${`${vars.baseSpacing}px`};

  ${({ noPadding }) =>
    noPadding &&
    `
    margin-bottom: 0;
  `}
`;

export const ButtonWrapper = styled.View`
  padding: ${({ safeArea }) => `
        ${vars.largeSpacing}px
        ${vars.baseSpacing}px
        ${vars.baseSpacing + safeArea}px
    `};
`;

export const EmployeesWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 10px;
`;

export const PhotoWrapper = styled.View`
  margin-left: -10px;
`;

export const DateWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateIcon = styled(Icon)`
  margin-right: 12px;
`;

export const AttachmentWrapper = styled.View`
  margin-bottom: ${`${vars.baseSpacing}px`};
`;
