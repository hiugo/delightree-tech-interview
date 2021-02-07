import React from "react";
import { TouchableOpacity } from "react-native";

import Icon from "@components/Icon";

import { Container, InputText } from "./AttachmentInput.styles";

const AttachmentInput = ({ file, onDelete, ...props }) => {
  return (
    <Container {...props}>
      <Icon name="link" />
      <InputText>{file}</InputText>
      <TouchableOpacity onPress={handleDelete}>
        {!!onDelete && <Icon name="trash" variant="danger" />}
      </TouchableOpacity>
    </Container>
  );

  function handleDelete() {
    onDelete?.();
  }
};

export default AttachmentInput;
