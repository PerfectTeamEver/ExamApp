import styled from "styled-components";

export const MapContent = styled.div`
  /* width: 250px; */
  background-color: #303030;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, auto);
  padding: 25px;
  gap: 20px;
  box-shadow: 0 0 10px #303030;
  border-radius: 10px;
`;

export const TestNum = styled.div`
  user-select: none;
  width: 25px;
  height: 25px;
  padding: 5px;
  border-radius: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => (props.currentTest ? "yellow" : props.isAnswerSelected ? "red" : "white")};

  &:hover {
    background-color: coral;
  }
`;
