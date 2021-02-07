import React from "react";
import { TouchableOpacity } from "react-native";

import Icon from "@components/Icon";

import { Container, InputText } from "./CalendarInput.styles";

const CalendarInput = ({ value, onPress, ...props }) => {
  return (
    <TouchableOpacity onPress={handleCalendarPress}>
      <Container {...props}>
        <InputText isGray={!value}>
          {value ? `${value}.01.2021` : "Due date"}
        </InputText>
        <Icon name="calendar-alt" variant="gray" />
      </Container>
    </TouchableOpacity>
  );

  function handleCalendarPress() {
    onPress?.();
  }
};

export default CalendarInput;
