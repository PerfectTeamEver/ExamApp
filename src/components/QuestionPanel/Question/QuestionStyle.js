import styled from "styled-components";

export const TestContainer = styled.div`
  width: 70%;
  padding: 30px 70px 70px;
  background-color: #303030;
  color: #fff;
  border-radius: 10px;
  min-height: 400px;
  box-shadow: 0 0 15px #303030;
`;

export const CardContent = styled.div`
  p {
    margin-bottom: 20px;
    span {
      font-size: 25px;
      font-weight: bold;
      color: coral;
    }
  }
`;

export const QuestionText = styled.div`
  font-size: 20px;
`;

export const Answers = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  gap: 30px;
  margin-top: 50px;
`;

export const Option = styled.div`
  padding: 15px 0;
  padding-left: 10px;
  background-color: ${(props) => (props.selected ? "coral" : "white")};
  color: #000;
  border-radius: 5px;
  &:hover {
    background-color: coral;
    cursor: pointer;
  }
`;
