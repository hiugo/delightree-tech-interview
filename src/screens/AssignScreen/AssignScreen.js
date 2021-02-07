import React, { useState, useEffect, useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { EMPLOYEES } from "@utils";

import { AppContext } from "@store";
import * as actions from "@store/actions";

import Header from "@components/Header";
import Button from "@components/Button";
import Input from "@components/Input";
import Text from "@components/Text";

import {
  Container,
  Content,
  Block,
  ButtonWrapper,
  EmployeeWrapper,
  EmployeeNameWrapper,
  EmployeeName,
  EmployeePosition,
  StyledProfilePhoto,
} from "./AssignScreen.styles";

const AssignScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const { state, dispatch } = useContext(AppContext);

  const [inputText, setInputText] = useState("");
  const [assigned, setAssigned] = useState(state.assigned ?? []);
  const [filteredList, setFilteredList] = useState(EMPLOYEES);

  useEffect(() => {
    const newList = EMPLOYEES?.filter((employee) =>
      employee.name.includes(inputText)
    );

    setFilteredList(newList);
  }, [inputText]);

  return (
    <Container>
      <Header title="Assign employee" hasBack />

      <Content>
        <Block>
          <Input
            variant="search"
            placeholder="Search members"
            value={inputText}
            onChange={(text) => setInputText(text)}
          />
        </Block>
        <Block>{renderList()}</Block>
      </Content>

      <ButtonWrapper safeArea={insets?.bottom}>
        <Button onPress={handleConfirm}>Assign</Button>
      </ButtonWrapper>
    </Container>
  );

  function renderList() {
    if (!filteredList?.length) {
      return <Text>No results...</Text>;
    }

    return (
      <FlatList
        data={filteredList}
        renderItem={renderEmployee}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
      />
    );
  }

  function renderEmployee({ item }) {
    const { name, title, id } = item ?? {};

    const isSelected = assigned.includes(id);

    return (
      <TouchableOpacity onPress={() => handleAssign(id)}>
        <EmployeeWrapper>
          <StyledProfilePhoto {...{ isSelected }} />
          <EmployeeNameWrapper>
            <EmployeeName>{name}</EmployeeName>
            {!!title && <EmployeePosition>{title}</EmployeePosition>}
          </EmployeeNameWrapper>
        </EmployeeWrapper>
      </TouchableOpacity>
    );
  }

  function handleAssign(id) {
    setAssigned((prev) => {
      const newArray = prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id];

      return newArray;
    });
  }

  function handleConfirm() {
    dispatch(actions.setAssigned(assigned));
    navigation?.goBack();
  }
};

export default AssignScreen;
