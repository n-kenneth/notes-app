import styled from "styled-components";

const SearchInput = styled.div`
  box-shadow: 0px 3px 6px #00000029;
  height: 46px;
  width: 100%;

  input {
    border: none;
    height: 100%;
    outline: 0;
    padding: 0;
    width: 100%;
    color: #00000099;
    font-family: "Roboto";
    font-size: 18px;
    padding: 12px 50px;
    box-sizing: border-box;

    &::placeholder {
      color: #00000099;
    }
  }
`;

const Search = () => (
  <SearchInput>
    <input type="text" placeholder="Search notes..." />
  </SearchInput>
);

export default Search;
