import React from "react";
import { TouchableOpacity } from "react-native";

import Icon from "@components/Icon";

import { Container, InputText, Content } from "./CalendarInput.styles";

const CalendarInput = ({ value, onPress, ...props }) => {
  return (
    <Container>
      <TouchableOpacity onPress={handleCalendarPress}>
        <Content {...props}>
          <InputText isGray={!value}>
            {value ? `${value}.01.2021` : "Due date"}
          </InputText>
          <Icon name="calendar-alt" variant="gray" />
        </Content>
      </TouchableOpacity>
    </Container>
  );

  function handleCalendarPress() {
    onPress?.();
  }
};

export default CalendarInput;
