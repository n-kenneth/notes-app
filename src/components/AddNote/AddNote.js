import { useContext, useEffect, useState } from "react";
import { PopupContext } from "../../context/Popup";
import { NotesContext } from "../../context/Notes";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

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

const AddNote = ({ id, hidePopup }) => {
  const [, setPopupState] = useContext(PopupContext);
  const [notes, setNotes] = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const _handleSubmit = (event) => {
    event.preventDefault();
    if (title && description && category) {
      if (id) {
        const notesCoopy = [...notes];
        const noteIndex = notesCoopy.findIndex((note) => note.id === id);
        notesCoopy[noteIndex].title = title;
        notesCoopy[noteIndex].description = description;
        notesCoopy[noteIndex].category = category;
        setNotes(notesCoopy);
        hidePopup(false);
      } else {
        notes.push({
          id: uuidv4(),
          title,
          description,
          category,
          date: moment().format("MMM DD, YYYY"),
        });
      }

      setNotes(notes);
      setPopupState(false);
      setTitle("");
      setDescription("");
      setCategory("");
    }
  };

  useEffect(() => {
    if (id) {
      const note = notes.find((note) => note.id === id);
      setTitle(note.title);
      setDescription(note.description);
      setCategory(note.category);
    }
  }, [id, notes]);

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
