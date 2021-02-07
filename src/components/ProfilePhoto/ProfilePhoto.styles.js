import styled from "styled-components/native";

import colors from "@theme/colors";
import vars from "@theme/vars";
import fonts from "@theme/fonts";

import Text from "@components/Text";

const IMAGE_BORDER_SIZE = 4;

export const Container = styled.View`
  position: relative;
  width: ${`${vars.profilePhotoSize}px`};
  height: ${`${vars.profilePhotoSize}px`};
`;

export const StyledImage = styled.Image`
  width: ${`${vars.profilePhotoSize}px`};
  height: ${`${vars.profilePhotoSize}px`};
  background-color: ${colors.P11};
  border-radius: ${`${vars.profilePhotoSize / 2}px`};
`;

export const ImageBorder = styled.View`
  position: absolute;
  width: ${`${vars.profilePhotoSize + IMAGE_BORDER_SIZE * 2}px`};
  height: ${`${vars.profilePhotoSize + IMAGE_BORDER_SIZE * 2}px`};
  background-color: ${colors.N10};
  top: ${`-${IMAGE_BORDER_SIZE}px`};
  left: ${`-${IMAGE_BORDER_SIZE}px`};
  border-radius: ${`${vars.profilePhotoSize + (IMAGE_BORDER_SIZE * 2) / 2}px`};
`;

export const Check = styled.View`
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 11px;
  background-color: ${colors.P11};
  bottom: -2px;
  right: -2px;
  border: 2px solid white;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.View`
  width: ${`${vars.profilePhotoSize}px`};
  height: ${`${vars.profilePhotoSize}px`};
  background-color: ${colors.P11};
  border-radius: ${`${vars.profilePhotoSize / 2}px`};
  justify-content: center;
  align-items: center;
`;

export const Number = styled(Text)`
  font-family: ${fonts.nunitoBold};
  color: ${colors.N10};
`;
