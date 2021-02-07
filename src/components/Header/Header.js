import * as React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import Icon from "@components/Icon";

import {
  HeaderTitle,
  Container,
  Content,
  ButtonWrapper,
} from "./Header.styles";

function Header({ title, hasBack, hasOptions }) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <Container safeAreaTop={insets?.top}>
      <Content>
        {hasBack && (
          <ButtonWrapper onPress={() => navigation?.goBack()}>
            <Icon name="chevron-left" variant="inverted" />
          </ButtonWrapper>
        )}
        <HeaderTitle numberOfLines={1}>{title ?? null}</HeaderTitle>
        <ButtonWrapper isRight>
          {hasOptions && <Icon name="ellipsis-v" variant="inverted" />}
        </ButtonWrapper>
      </Content>
    </Container>
  );
}

export default Header;
