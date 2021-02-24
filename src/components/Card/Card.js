import CheckBox from "../Checkbox/Checkbox";

import styled from "styled-components";

import deleteIcon from "../../assets/images/trash.svg";
import editIcon from "../../assets/images/edit.svg";
import { useState } from "react";
import Popup from "../Popup/Popup";
import AddNote from "../AddNote/AddNote";

const CardContainer = styled.div`
  max-width: 400px;
  padding: 15px;
  border-radius: 4px;
  color: #fff;
  margin-bottom: 10px;
  background: ${(props) => props.color};
`;
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  h3 {
    font-family: "Roboto";
    font-weight: 500;
    font-size: 20px;
    margin-left: 20px;
  }
`;
const CardControls = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  button {
    background: none;
    border: none;
    outline: 0;
    cursor: pointer;
    margin-left: 10px;
  }
`;
const CardBody = styled.div`
  font-size: 14px;
  font-family: "Roboto";
  margin-bottom: 25px;
`;
const CardFooter = styled.div`
  font-size: 15px;
`;

const Card = ({ id, title, category, description, date }) => {
  const [popupState, setPopupState] = useState(false);

  let categoryColor;
  if (category.toLowerCase() === "home") categoryColor = "#FF9100";
  if (category.toLowerCase() === "work") categoryColor = "#5C6BC0";
  if (category.toLowerCase() === "personal") categoryColor = "#66BB6A";

  return (
    <>
      <CardContainer color={categoryColor}>
        <CardHeader>
          <CheckBox id={id} />
          <h3>{title}</h3>
          <CardControls>
            <button type="button" onClick={() => setPopupState(true)}>
              <img src={editIcon} />
            </button>
            <button type="button">
              <img src={deleteIcon} />
            </button>
          </CardControls>
        </CardHeader>
        <CardBody>{description}</CardBody>
        <CardFooter>{date}</CardFooter>
      </CardContainer>
      {popupState && (
        <Popup title="Edit Note" show>
          <AddNote id={id} hidePopup={setPopupState} />
        </Popup>
      )}
    </>
  );
};

export default Card;
