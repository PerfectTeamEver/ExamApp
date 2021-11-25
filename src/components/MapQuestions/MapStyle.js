import styled from "styled-components";

export const MapContainer = styled.div`
  background-color: #303030;
  padding: 25px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

export const MapContent = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, auto);
  gap: 20px;
  box-shadow: 0 0 10px #303030;
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
  background-color: ${(props) =>
    props.currentTest ? "yellow" : props.isAnswerSelected ? "coral" : "white"};
  &:hover {
    background-color: yellow;
  }
`;

export const StopTest = styled.button`
  margin-top: 20px;
  padding: 5px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  align-items: center;
  transition: 0.3s;
  text-decoration: none;

  svg {
    margin-right: 10px;
    color: red;
    font-size: 20px;
  }

  &:hover {
    transform: scale(1.05);
    background-color: red;
    color: #fff;
    svg {
      color: #fff;
    }
  }
`;
