import { useContext, useEffect, useState } from "react";
import { NotesContext } from "../../context/Notes";
import Card from "../Card/Card";

import styled from "styled-components";

const CardListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CardList = () => {
  const [notes, setNotes] = useContext(NotesContext);
  return (
    <CardListContainer>
      {notes.map((note) => (
        <Card key={note.id} {...note} />
      ))}
    </CardListContainer>
  );
};

export default CardList;
