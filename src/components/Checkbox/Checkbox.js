import { useEffect, useState } from "react";
import styled from "styled-components";

import emptyIcon from "../../assets/images/empty-checkbox.svg";
import fillIcon from "../../assets/images/fill-checkbox.svg";

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  input {
    display: none;
  }
  label {
    cursor: pointer;
  }
`;

const Checkbox = ({ id }) => {
  const [checkox, setCheckbox] = useState(false);

  return (
    <CheckBoxContainer>
      <input
        type="checkbox"
        id={id}
        checked={checkox}
        onChange={() => setCheckbox(!checkox)}
      />
      <label htmlFor={id}>
        {checkox ? (
          <img src={fillIcon} alt="fill icon" />
        ) : (
          <img src={emptyIcon} alt="empty icon" />
        )}
      </label>
    </CheckBoxContainer>
  );
};

export default Checkbox;
