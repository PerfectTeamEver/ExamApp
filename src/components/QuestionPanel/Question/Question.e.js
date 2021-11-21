import styled from "styled-components";

export const Option = styled.div`
   padding: 10px;
   background-color: ${(props) => props.selected ? "red" : "white"};
   &:hover {
      cursor: pointer;
      background-color: #888;
   }
`;
