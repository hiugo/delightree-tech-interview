import * as React from "react";
import { TouchableOpacity } from "react-native";

import Icon from "@components/Icon";

import {
  Container,
  StyledImage,
  Check,
  ImageBorder,
  Circle,
  Number,
} from "./ProfilePhoto.styles";

function ProfilePhoto({ isSelected, variant, onPress, number, ...props }) {
  return (
    <Container {...props}>
      <ImageBorder />
      {renderContent()}
    </Container>
  );

  function renderContent() {
    if (variant === "add") {
      return (
        <TouchableOpacity onPress={handlePress}>
          <Circle>
            <Icon name="plus" variant="inverted" />
          </Circle>
        </TouchableOpacity>
      );
    }

    if (variant === "number") {
      return (
        <Circle>
          <Number>{`+${number}`}</Number>
        </Circle>
      );
    }

    return (
      <>
        <StyledImage source={require("@assets/images/profile_photo.jpg")} />
        {isSelected && (
          <Check>
            <Icon name="check" size={12} variant="inverted" />
          </Check>
        )}
      </>
    );

    function handlePress() {
      onPress?.();
    }
  }
}

export default ProfilePhoto;
