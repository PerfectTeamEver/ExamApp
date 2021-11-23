import styled from "styled-components";

export const Option = styled.div`
  padding: 10px;
  background-color: ${(props) => props.isTrue && "#7cfc00"};
  /* background-color: ${(props) => props.isFalse && "red"}; */
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
