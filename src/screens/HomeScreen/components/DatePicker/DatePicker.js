import React, { useState } from "react";
import { Modal } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Icon from "@components/Icon";
import Button from "@components/Button";

import {
  Container,
  Title,
  Background,
  NavigationTitle,
  NavigationWrapper,
  NavigationArrow,
  WeekdaysWrapper,
  Weekday,
  DaysWrapper,
  Day,
  DayButton,
  DayText,
} from "./DatePicker.styles";

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const JAN_DAYS = 31;
const NUMBER_OF_ROWS = Math.ceil(JAN_DAYS / 7);
const DAYS_ON_FULL_TABLE = NUMBER_OF_ROWS * 7;

const DatePicker = ({ isOpen, onClose, onChange, value }) => {
  const insets = useSafeAreaInsets();

  const [selectedDay, setSelectedDay] = useState(value ?? new Date().getDate());

  return (
    <Modal animationType="slide" transparent visible={isOpen}>
      <Background>
        <Container safeArea={insets?.bottom}>
          <Title>Time from</Title>
          <NavigationWrapper>
            <NavigationTitle>January 2021</NavigationTitle>
            <NavigationArrow>
              <Icon name="chevron-left" variant="gray" />
            </NavigationArrow>
            <NavigationArrow>
              <Icon name="chevron-right" variant="gray" />
            </NavigationArrow>
          </NavigationWrapper>
          <WeekdaysWrapper>
            {WEEKDAYS.map((weekday) => (
              <Weekday key={weekday}>{weekday}</Weekday>
            ))}
          </WeekdaysWrapper>
          <DaysWrapper>
            {new Array(DAYS_ON_FULL_TABLE).fill().map(renderDay)}
          </DaysWrapper>

          <Button onPress={handlePress}>Apply</Button>
        </Container>
      </Background>
    </Modal>
  );

  function renderDay(_, i) {
    const day = i + 1;
    const isSelected = day === selectedDay;

    if (day > JAN_DAYS) {
      return <Day key={`day-${day}`} />;
    }

    return (
      <Day key={`day-${day}`}>
        <DayButton onPress={() => setSelectedDay(day)} {...{ isSelected }}>
          <DayText {...{ isSelected }}>{day}</DayText>
        </DayButton>
      </Day>
    );
  }

  function handlePress() {
    onChange?.(selectedDay);
    onClose?.();
  }
};

export default DatePicker;
