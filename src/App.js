import Layout from "./components/Layout/Layout";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";
import Button from "./components/button/Button";
import Popup from "./components/Popup/Popup";

import styled from "styled-components";
import NotFound from "./components/NotFound/NotFound";
import AddNote from "./components/AddNote/AddNote";
import { PopupContext } from "./context/Popup";
import { NotesContext } from "./context/Notes";
import { useContext } from "react";
import CardList from "./components/CardList/CardList";

const FilterLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

const App = () => {
  const [popupState, setPopupState] = useContext(PopupContext);
  const [notes] = useContext(NotesContext);
  return (
    <Layout>
      <Search />
      <FilterLayout>
        <Filter />
        <Button
          primary
          hasAddIcon
          label="ADD NOTE"
          onClick={() => setPopupState(true)}
        />
      </FilterLayout>
      {popupState && (
        <Popup title="Add Note" show>
          <AddNote />
        </Popup>
      )}

      {notes.length ? (
        <CardList />
      ) : (
        <NotFound label="You don't have any notes" type="add" />
      )}
    </Layout>
  );
};

export default App;
