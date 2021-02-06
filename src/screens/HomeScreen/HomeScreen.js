import React, { useContext, useEffect } from "react";

import { AppContext } from "@store";
import * as actions from "@store/actions";

import Text from "@components/Text";

import { Container } from "./HomeScreen.styles";

const HomeScreen = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch(actions.setData({ test: 1 }));
  }, [dispatch]);

  return (
    <Container>
      <Text>Summary {state.test}</Text>
    </Container>
  );
};

export default HomeScreen;
