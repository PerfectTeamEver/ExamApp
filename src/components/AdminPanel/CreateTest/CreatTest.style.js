import styled from "styled-components";
import {device} from '../../../Sizes'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media ${device.tablet}{
    padding: 40px 0;
  }

  @media ${device.mobileL}{
    height: 100%;
    width: 100%;
    padding: 20px 0;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  font-size: 20px;
  background-color: #303030;
  color: #fff;
  padding: 50px 100px 70px;
  border-radius: 7px;
  box-shadow: 0 0 10px #303030;

  @media ${device.laptop}{
    width: 80%;
    padding: 50px 50px 70px;
  }

  @media ${device.tablet}{
    width: 90%;
  }

  @media ${device.mobileL}{
    padding: 20px 20px 50px;    
  }
`;

export const Adding = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Question = styled.div`
  margin: 15px 0;
  label {
    font-weight: bold;
    color: coral;
  }
  input {
    margin-top: 10px;
    width: 100%;
    padding: 10px;
  }
`;

export const Input = styled.input`
  outline: none;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  padding: 7px 10px;
  width: 100%;
`;

export const Option = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const InputWrapper = styled.div`
  margin-right: 20px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const ErrorText = styled.span`
  font-size: 15px;
  color: red;
  position: absolute;
  right: 20px;
  top: 10px;
  font-weight: bold;
`;

export const Add = styled.button`
  position: absolute;
  right: 50px;
  border: none;
  border-radius: 5px;
  padding: 7px 20px;
  font-size: 16px;
  background-color: #7cfc00;
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;
  &:hover {
    transform: scale(1.05);
  }

  @media ${device.mobileL}{
    right: 15px;
  }
`;

export const Validation = styled.div`
  color: red;
  margin-bottom: 20px;
`;

export const MyTest = styled.button`
  position: absolute;
  left: 50px;
  border: none;
  border-radius: 5px;
  padding: 7px 20px;
  font-size: 16px;
  background-color: coral;
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;
  &:hover {
    transform: scale(1.05);
  }

  @media ${device.mobileL}{
    left: 15px;
  }
`;

export const Check = styled.input`
  cursor: pointer;
  width: 25px;
  height: 25px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: #000;
    font-size: 15px;
  }
`;
