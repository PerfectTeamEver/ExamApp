import styled from "styled-components";
import { device } from "../../../Sizes";

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  
  p {
    width: 50%;
    text-align: center;
    margin-bottom: 30px;
    padding: 100px 50px;
    font-size: 30px;
    background-color: #303030;
    color: #fff;
    box-shadow: 0 0 10px #303030;
    span {
      color: coral;
      font-size: 35px;
      font-weight: bold;
    }

    @media ${device.laptop}{
      width: 60%;
    }

    @media ${device.tablet}{
      width: 85%;
    padding: 90px 25px;

    }

    @media ${device.mobileL}{
      width: 90%;
      padding: 70px 20px;
    }
  }
`

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
  /* height: 100%; */
  width: 100%;
  padding: 50px 0;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 4%;

  @media ${device.tablet}{
    flex-direction: column;
    align-items: center;
  }

`;

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.tablet}{
    width: 100%;
  }
`;

export const TestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100%;
  min-height: 400px;
  padding: 50px;
  box-shadow: 0 0 10px #303030;
  position: relative;

  @media ${device.laptop}{
    padding: 70px 20px 20px;
  }
`;

export const ResultScore = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 20px;
  background-color: #303030;
  padding: 7px 15px;
  color: #fff;
  border-radius: 5px;
  span {
    font-size: 20px;
    color: coral;
    font-weight: bold;
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
