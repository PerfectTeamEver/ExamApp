import styled from "styled-components";
import { device } from "../../Sizes";

export const TestWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  width: 100%;
  padding: 5% 5%;

  @media ${device.laptop} {
    padding: 30px;
  }

  @media ${device.tablet} {
    height: auto;
  }
`;

export const Test = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;

  @media ${device.tablet} {
    width: 100%;
  }
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
