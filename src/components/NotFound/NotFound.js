import styled from "styled-components";

import AddNoteImage from "../../assets/images/add-note-illustration.svg";
import SearchImage from "../../assets/images/search-image.svg";

const NotFoundContainer = styled.div`
  text-align: center;
  margin: 60px 0;
  h3 {
    color: #00000099;
    font-size: 34px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const NotFound = ({ label, type }) => {
  const imagePath = type === "add" ? AddNoteImage : SearchImage;
  return (
    <NotFoundContainer>
      <h3>{label}</h3>
      <img src={imagePath} alt={type} />
    </NotFoundContainer>
  );
};

export default NotFound;
