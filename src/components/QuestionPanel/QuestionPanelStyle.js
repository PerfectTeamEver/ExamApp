import styled from "styled-components";

export const TestWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 0 5%;
`;

export const Test = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
`;

export const Controls = styled.div`
  width: 100%;
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
