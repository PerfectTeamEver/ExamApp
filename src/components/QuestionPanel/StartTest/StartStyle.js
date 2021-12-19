import styled from "styled-components";
import {device} from "../../../Sizes"

export const StartContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 50%;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #303030;
  color: #fff;
  box-shadow: 0 0 10px #000;
  a {
    text-decoration: none;
  }

  @media ${device.laptop}{
    width :60%; 
  }
  
  @media ${device.tablet}{
    width :80%; 
  }

  @media ${device.mobileL}{
    width :90%; 
    padding: 40px 20px;
  }
`;

export const TestTitle = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
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
