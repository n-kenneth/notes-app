import Pill from "../Pill/Pill";
import styled from "styled-components";

const FilterStyles = styled.ul`
  display: flex;
  align-items: center;

  li {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Filter = () => (
  <FilterStyles>
    <li>
      <Pill label="All" isSelected />
    </li>
    <li>
      <Pill label="Home" color="#FF9100" />
    </li>
    <li>
      <Pill label="Work" color="#5C6BC0" />
    </li>
    <li>
      <Pill label="Personal" color="#66BB6A" />
    </li>
  </FilterStyles>
);

export default Filter;
