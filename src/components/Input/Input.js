import styled from "styled-components";

const InputContainer = styled.div`
  background: #f4f4f4;
  border-radius: 4px;
  height: 44px;

  input {
    border: none;
    background: none;
    font-size: 24px;
    color: #00000099;
    outline: 0;
    padding: 15px;
    height: 100%;
    width: 100%;
  }
`;

const Input = ({ type, placeholder, value, handleChange }) => (
  <InputContainer>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  </InputContainer>
);

export default Input;
