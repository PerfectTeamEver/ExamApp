import styled from "styled-components";

export const StartContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #303030;
  color: #fff;
  box-shadow: 0 0 10px #000;
`;

export const StartBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  font-size: 26px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  background-color: coral;
  color: #000;
  transition: 0.3s;

  &:hover {
    background-color: #7cfc00;
    color: #000;
  }

  svg {
    margin-right: 5px;
  }
`;

export const TestTitle = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;

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

export const MainContainer = styled.div``;

export const TestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

export const Btns = styled.div`
  width: 70%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const Btn = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  color: #000;
  backdrop-filter: blur(100px);
  border: none;
  display: flex;
  align-items: center;
  transition: 0.3s;
  &:active {
    background-color: #fff;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

export const StopTest = styled.button`
  padding: 5px 20px;
  position: absolute;
  font-size: 16px;
  top: 15px;
  right: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  align-items: center;
  transition: 0.3s;

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
