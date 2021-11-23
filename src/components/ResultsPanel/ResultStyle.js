import styled from "styled-components";

export const ResultWrapper = styled.div`
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

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 80px;
`;

export const Wrapper = styled.div`
  background-color: #fff;
  width: 70%;
  min-height: 400px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 0 10px #303030;

  h3 {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 30px;
    font-weight: bold;
  }
`;

export const Map = styled.div`
  width: 250px;
  background-color: #303030;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, auto);
  padding: 30px;
  gap: 20px;
  box-shadow: 0 0 10px #303030;
  border-radius: 10px;
`;

export const TestNum = styled.div`
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Controls = styled.div`
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

export const TestNumber = styled.h2`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  font-size: 25px;

  svg {
    color: green;
    margin-left: 10px;
  }
`;
