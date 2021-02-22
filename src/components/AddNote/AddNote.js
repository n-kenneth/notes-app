import { useContext, useState } from "react";
import { PopupContext } from "../../context/Popup";
import { NotesContext } from "../../context/Notes";
import { v4 as uuidv4 } from "uuid";

import Input from "../Input/Input";
import Select from "../Select/Select";
import TextArea from "../TextArea/TextArea";

import styled from "styled-components";
import Button from "../button/Button";

const FormLayout = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    flex: 1 0 auto;
  }

  & > *:nth-child(2n + 1) {
    max-width: 475px;
    margin-bottom: 10px;
    width: 100%;
    margin-right: 20px;
  }
`;

const ButtonAction = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    margin-right: 10px;
  }
`;

const AddNote = () => {
  const [popupState, setPopupState] = useContext(PopupContext);
  const [notes, setNotes] = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const _handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      id: uuidv4(),
      title,
      description,
      category,
    });
    if (title && description && category) {
      notes.push({
        id: uuidv4(),
        title,
        description,
        category,
      });
      setNotes(notes);
    }
  };

  return (
    <form onSubmit={_handleSubmit}>
      <FormLayout>
        <Input
          type="text"
          placeholder="Add title..."
          value={title}
          handleChange={(event) => setTitle(event.target.value)}
        />
        <Select
          options={["Home", "Work", "Personal"]}
          placeholder="Select a category"
          value={category}
          handleChange={(event) => setCategory(event.target.value)}
        />
        <TextArea
          placeholder="Add description…"
          value={description}
          handleChange={(event) => setDescription(event.target.value)}
        />
      </FormLayout>
      <ButtonAction>
        <Button label="Cancel" onClick={() => setPopupState(false)} />
        <Button label="Add" type="submit" />
      </ButtonAction>
    </form>
  );
};

export default AddNote;
