import React, { useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { EMPLOYEES } from "@utils";

import { AppContext } from "@store";

import Header from "@components/Header";
import Button from "@components/Button";
import Text from "@components/Text";
import ProfilePhoto from "@components/ProfilePhoto";
import AttachmentInput from "@components/AttachmentInput";

import {
  Container,
  Content,
  Block,
  ButtonWrapper,
  Label,
  EmployeesWrapper,
  PhotoWrapper,
  DateWrapper,
  DateIcon,
  AttachmentWrapper,
} from "./TaskScreen.styles";

const MAX_EMPLOYEES = 3;

const TaskScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const { state } = useContext(AppContext);

  // Get last added task
  const task = state.tasks?.slice(-1)[0];

  const { assigned, attachments, date, description, title } = task ?? {};

  const employeesList = EMPLOYEES.filter((employee) =>
    assigned?.includes(employee.id)
  );

  const employeesListLength = employeesList?.length;
  const hasHiddenEmployees = employeesListLength > MAX_EMPLOYEES;
  const numOfHiddenEmployees = employeesListLength - MAX_EMPLOYEES;

  const shortEmployeesList = employeesList?.slice(0, MAX_EMPLOYEES);

  return (
    <Container>
      <Header {...{ title }} hasBack hasOptions />

      <Content>
        <Block>
          <Label noPadding>{title}</Label>
        </Block>
        <Block>
          <Label>Assignees</Label>
          {assigned?.length ? (
            <EmployeesWrapper>
              {shortEmployeesList?.map((employee) => (
                <PhotoWrapper key={employee.id}>
                  <ProfilePhoto />
                </PhotoWrapper>
              ))}
              {hasHiddenEmployees && (
                <PhotoWrapper>
                  <ProfilePhoto
                    variant="number"
                    number={numOfHiddenEmployees}
                  />
                </PhotoWrapper>
              )}
            </EmployeesWrapper>
          ) : (
            <Text>No assigned employees...</Text>
          )}
        </Block>
        <Block>
          <DateWrapper>
            <DateIcon name="calendar-alt" variant="gray" />
            <Text>{`${date}.01.2021`}</Text>
          </DateWrapper>
        </Block>
        <Block>
          <Label>Description</Label>
          {description ? (
            <Text>{description}</Text>
          ) : (
            <Text>No description...</Text>
          )}
        </Block>
        <Block>
          <Label>Attachments</Label>
          {attachments?.length ? (
            attachments.map(renderAttachment)
          ) : (
            <Text>No attachments...</Text>
          )}
        </Block>
      </Content>

      <ButtonWrapper safeArea={insets?.bottom}>
        <Button onPress={handleClose}>Close Task</Button>
      </ButtonWrapper>
    </Container>
  );

  function renderAttachment(file) {
    return (
      <AttachmentWrapper key={file}>
        <AttachmentInput {...{ file }} />
      </AttachmentWrapper>
    );
  }

  function handleClose() {
    navigation.goBack();
  }
};

export default TaskScreen;
