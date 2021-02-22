import styled from "styled-components";
import AddIcon from "../../assets/images/add.svg";

const ButtonStyles = styled.button`
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${(props) => (props.isPrimary ? "#fff" : "#2196F3")};
  background: ${(props) => (props.isPrimary ? "#2196F3" : "#fff")};
  width: ${(props) => (props.isPrimary ? "128px" : "auto")};
  height: ${(props) => (props.isPrimary ? "36px" : "auto")};
  transition: all 300ms ease-out;
  text-transform: uppercase;
`;

const Button = ({ label, primary, hasAddIcon, onClick, type }) => (
  <ButtonStyles
    isPrimary={primary}
    onClick={onClick}
    type={type ? type : "button"}
  >
    {hasAddIcon && (
      <span>
        <img src={AddIcon} alt="add icon" />
      </span>
    )}{" "}
    {label}
  </ButtonStyles>
);

export default Button;
