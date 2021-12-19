import styled from "styled-components";
import { device } from "../../../Sizes";

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

  @media ${device.tablet} {
    margin-top: 30px;
  }
`;

export const MapContent = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, auto);
  gap: 20px;
  box-shadow: 0 0 10px #303030;

  @media ${device.tablet} {
    /* grid-template-columns: repeat(10, auto); */
    display:flex;
    flex-wrap: wrap;
  }
`;

export const Select = styled.div`
  border-bottom: ${(props) => props.currentTest && "2px solid #fff"};
  padding-bottom: ${(props) => props.currentTest && "5px"};
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
  background-color: ${(props) => (props.isAnswerSelected ? "coral" : "white")};

  @media ${device.tablet} {
    width: 40px;
    height: 40px;
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
