import styled from "styled-components";

const PillContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: none;
  border-radius: 4px;
  width: 90px;
  height: 36px;
  cursor: pointer;
  color: ${(props) => (props.selected ? "#fff" : "#00000099")};
  background: ${(props) => (props.selected ? "#69BCFF" : "#fff")};
  transition: all 300ms ease-in;

  &:hover {
    background: #69bcff;
    color: #fff;
  }

  span {
    position: relative;
    &:after {
      content: ${(props) => (props.background ? '""' : "none")};
      display: block;
      background: ${(props) => props.background};
      height: 6px;
      width: 6px;
      border-radius: 100px;
      position: absolute;
      top: calc(100% + 2px);
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Pill = ({ label, color, isSelected }) => (
  <PillContainer selected={isSelected} background={color}>
    <span>{label}</span>
  </PillContainer>
);

export default Pill;
