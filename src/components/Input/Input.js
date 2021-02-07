import React from "react";

import Icon from "@components/Icon";

import { StyledInput, Container, WordCount } from "./Input.styles";

const MAX_WORDS = 500;

const Input = ({
  placeholder = "",
  value = "",
  onChange,
  variant,
  ...props
}) => {
  const isMultiline = variant === "multiline";
  const isSearch = variant === "search";

  return (
    <Container>
      <StyledInput
        value={value}
        onChangeText={handleChange}
        underlineColorAndroid="transparent"
        {...(isMultiline && {
          multiline: true,
          numberOfLines: 4,
          maxLength: MAX_WORDS,
          textAlignVertical: "top",
        })}
        {...{ placeholder, isMultiline }}
        {...props}
      />
      {isMultiline && <WordCount>{`${value.length}/${MAX_WORDS}`}</WordCount>}
      {isSearch && <Icon name="search" variant="gray" />}
    </Container>
  );

  function handleChange(newText) {
    onChange?.(newText);
  }
};

export default Input;
