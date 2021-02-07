import styled from "styled-components/native";

import vars from "@theme/vars";
import colors from "@theme/colors";
import fonts from "@theme/fonts";

import Text from "@components/Text";

export const Background = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

export const Container = styled.View`
  background-color: ${colors.N10};
  padding: ${({ safeArea }) => `
      ${vars.largeSpacing}px
      ${vars.baseSpacing}px
      ${vars.largeSpacing + safeArea}px
  `};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const Title = styled(Text)`
  font-family: ${fonts.nunitoBold};
  margin-bottom: ${`${vars.largeSpacing}px`};
`;

export const NavigationWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${`${vars.smallSpacing}px`};
`;

export const NavigationTitle = styled(Text)`
  flex: 5;
`;

export const NavigationArrow = styled.View`
  flex: 1;
  align-items: center;
`;

export const WeekdaysWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: ${`${vars.borderWidth}px`};
  border-bottom-color: ${colors.N11};
  padding-bottom: 8px;
`;

export const Weekday = styled(Text)`
  flex: 1;
  text-align: center;
  color: ${colors.N12};
`;

export const WeekdayText = styled(Text)`
  color: ${colors.N12};
`;

export const DaysWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 4px;
`;

export const Day = styled.View`
  flex: 0 0 14.2%;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
`;

export const DayButton = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  justify-content: center;
  align-items: center;
  border-radius: ${`${vars.borderRadius}px`};

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: ${colors.P11};
  `}
`;

export const DayText = styled(Text)`
  color: ${({ isSelected }) => (isSelected ? colors.N10 : colors.N14)};
`;
