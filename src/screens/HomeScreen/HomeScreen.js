import React, { useContext, useState, useRef, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AppContext } from "@store";
import * as actions from "@store/actions";

import { EMPLOYEES } from "@utils";

import colors from "@theme/colors";

import Header from "@components/Header";
import Input from "@components/Input";
import Link from "@components/Link";
import Button from "@components/Button";
import ProfilePhoto from "@components/ProfilePhoto";
import AttachmentInput from "@components/AttachmentInput";

import CalendarInput from "./components/CalendarInput";
import DatePicker from "./components/DatePicker";

import {
  Container,
  Content,
  Block,
  Label,
  LinkWrapper,
  ButtonWrapper,
  EmployeesWrapper,
  PhotoWrapper,
  AttachmentWrapper,
} from "./HomeScreen.styles";

const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const { state, dispatch } = useContext(AppContext);

  const scrollViewRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState();
  const [description, setDescription] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [attachmentId, setAttachmentId] = useState(0);

  const employeesList = EMPLOYEES.filter((employee) =>
    state?.assigned?.includes(employee.id)
  );

  useEffect(() => {
    scrollViewRef?.current?.scrollToEnd({ animated: true });
  }, [attachments]);

  return (
    <Container>
      <Header title="Create task" />

      <Content ref={scrollViewRef}>
        <Block>
          <Label>Summary</Label>
          <Input
            placeholder="Title"
            value={title}
            onChange={(newText) => setTitle(newText)}
          />
        </Block>
        <Block>
          <CalendarInput onPress={() => setIsModalOpen(true)} value={date} />
        </Block>
        {renderEmployees()}
        <Block>
          <Label>Description</Label>
          <Input
            placeholder="Text"
            variant="multiline"
            value={description}
            onChange={(newText) => setDescription(newText)}
          />
        </Block>
        <Block>
          <LinkWrapper>
            <Label noPadding>Attachment</Label>
            <Link
              icon="link"
              color={colors.P11}
              onPress={() =>
                setAttachments((prev) => {
                  const id = attachmentId;

                  setAttachmentId(id + 1);

                  return [...prev, `File-name-${id}.docx`];
                })
              }
            >
              Add
            </Link>
          </LinkWrapper>
          {attachments?.map(renderAttachment)}
        </Block>
      </Content>

      <ButtonWrapper safeArea={insets?.bottom}>
        <Button isDisabled={!title || !date} onPress={handleCreate}>
          Create task
        </Button>
      </ButtonWrapper>

      <DatePicker
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onChange={(newDate) => setDate(newDate)}
      />
    </Container>
  );

  function renderEmployees() {
    if (!state?.assigned?.length) {
      return (
        <Block>
          <LinkWrapper>
            <Label noPadding>Employee</Label>
            <Link
              icon="plus"
              color={colors.P11}
              onPress={() => navigation?.navigate("Assign")}
            >
              Assign
            </Link>
          </LinkWrapper>
        </Block>
      );
    }

    return (
      <Block>
        <Label>Employee</Label>
        <EmployeesWrapper>
          {employeesList?.map((employee) => (
            <PhotoWrapper key={employee.id}>
              <ProfilePhoto />
            </PhotoWrapper>
          ))}
          <PhotoWrapper>
            <ProfilePhoto
              variant="add"
              onPress={() => navigation?.navigate("Assign")}
            />
          </PhotoWrapper>
        </EmployeesWrapper>
      </Block>
    );
  }

  function renderAttachment(file) {
    return (
      <AttachmentWrapper key={file}>
        <AttachmentInput
          {...{ file }}
          onDelete={() =>
            setAttachments((prev) => prev.filter((item) => item !== file))
          }
        />
      </AttachmentWrapper>
    );
  }

  function handleCreate() {
    const newTask = {
      title,
      date,
      assigned: state.assigned,
      description,
      attachments,
    };

    dispatch(actions.addTask(newTask));

    navigation.navigate("Task");

    // Clean previous states
    dispatch(actions.setAssigned([]));
    setTitle("");
    setDate();
    setDescription("");
    setAttachments([]);
  }
};

export default HomeScreen;
