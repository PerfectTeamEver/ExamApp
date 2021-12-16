import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    margin-bottom: 10px;
  }
`;

export const Wrapper = styled.div`
  width: 50%;
  background-color: #303030;
  padding: 30px 50px;
  color: #fff;
  margin: 10px 0;
  h3 {
    margin-bottom: 15px;
  }
  p {
    font-size: 18px;
    margin: 5px 0;
    padding: 5px;
  }
`;

export const CorrectAnswer = styled.p`
  background-color: #7cfc00;
  color: #000;
`;

export const Back = styled.button`
  position: absolute;
  font-size: 18px;
  padding: 7px 15px;
  border: none;
  border-radius: 5px;
  background-color: #303030;
  color: #fff;
  margin: 10px;
  cursor: pointer;
  z-index: 1;
`;
