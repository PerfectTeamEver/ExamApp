import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
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
  padding: 50px 100px;
  border-radius: 7px;
  box-shadow: 0 0 10px #303030;
`;

export const Adding = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Question = styled.div`
  margin: 30px 0;
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
  margin-left: 15px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  padding: 7px 10px;
  width: 70%;
`;

export const Answer = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Add = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px 20px;
  font-size: 16px;
  background-color: #7cfc00;
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Check = styled.div`
  cursor: pointer;
  margin-left: 15px;
  width: 20px;
  height: 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: #000;
    font-size: 15px;
  }
`;

export const True = styled.div``;
