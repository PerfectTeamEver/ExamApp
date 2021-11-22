import styled from "styled-components";

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  p {
    margin-bottom: 30px;
    height: max-content;
    padding: 100px;
    font-size: 30px;
    background-color: #303030;
    color: #fff;
    box-shadow: 0 0 10px #303030;
    span {
      color: coral;
      font-size: 35px;
      font-weight: bold;
    }
  }
`;

export const ResultBtn = styled.div`
  user-select: none;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  align-items: center;
  background-color: #303030;
  color: #fff;
  cursor: pointer;
  transition: 0.5s;

  svg {
    color: coral;
    margin-right: 5px;
    font-size: 30px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;
