import styled from "styled-components";

export const Option = styled.div`
  padding: 10px;
  background-color: ${(props) => props.isTrue && "#7cfc00"};
  border: 1.5px solid
    ${(props) => {
      return props.isFalseSelected ? "red" : "none";
    }};
  &:hover {
    cursor: pointer;
  }
  span {
    color: red;
    font-weight: bold;
  }
`;

export const TestContent = styled.div`
  width: 100%;
`;
export const Question = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;
