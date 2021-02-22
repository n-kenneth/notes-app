import styled from "styled-components";

const SelectStyle = styled.div`
  select {
    background: #f4f4f4;
    border-radius: 4px;
    height: 44px;
    border: none;
    padding: 11px 15px;
    outline: 0;
  }
`;

const Select = ({ placeholder, options, handleChange, value }) => (
  <SelectStyle>
    <select onChange={handleChange} value={value}>
      <option value="" disabled selected>
        {placeholder}
      </option>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  </SelectStyle>
);

export default Select;
