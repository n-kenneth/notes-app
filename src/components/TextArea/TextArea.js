import styled from "styled-components";

const TextareaStyle = styled.div`
  background: #f4f4f4;
  border-radius: 4px;

  textarea {
    border: none;
    background: none;
    font-size: 24px;
    color: #00000099;
    outline: 0;
    padding: 15px;
    height: 100%;
    resize: none;
    min-height: 227px;
    width: 100%;
  }
`;

const TextArea = ({ placeholder, value, handleChange }) => (
  <TextareaStyle>
    <textarea placeholder={placeholder} value={value} onChange={handleChange} />
  </TextareaStyle>
);

export default TextArea;
