import styled from "styled-components";
import { device, divice } from "../../../Sizes";

// export const H1 = styled.h1`
//   text-align: center;
//   margin-bottom: 20px;
// `;

export const BtnWrapper = styled.div`
  margin: 30px 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${device.tablet} {
    h1 {
      display: none;
    }
  }

  @media ${device.mobileL} {
    flex-direction: column;
    .searchMui {
      margin-top: 20px;
    }
  }
`;

export const Scroll = styled.div`
  margin: auto;
  height: 500px;
  width: 65%;
  overflow-y: scroll;
  border: 2px solid #303030;
  border-radius: 10px;

  ::-webkit-scrollbar {
    /* width: 20px; */
    display: none;
  }

  @media ${device.laptop} {
    width: 80%;
  }

  @media ${device.tablet} {
    width: 90%;
  }

  @media ${device.mobileL} {
    width: 95%;
  }
`;

export const Container = styled.div`
  padding: 30px 0;
  width: 100%;
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
  width: 90%;
  background-color: #303030;
  padding: 30px 50px;
  color: #fff;
  margin: 10px 0;
  box-shadow: 0 0 10px #303030;
  h4 {
    margin: 10px 0;
  }

  h3 {
    margin-bottom: 15px;
    padding: 5px;
    word-break: break-all;
  }
  p {
    font-size: 18px;
    margin: 5px 0;
    padding: 5px;
    word-break: break-all;
  }

  @media ${device.tablet} {
    /* width: 80%; */
    padding: 30px;
  }

  @media ${device.mobileL} {
    /* width: 90%; */
    padding: 20px;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  padding: 7px 15px;
  border: none;
  border-radius: 5px;
  background-color: #303030;
  color: #fff;
  cursor: pointer;
`;

export const CorrectAnswer = styled.div`
  background-color: #7cfc00;
  color: #000;
  padding: 5px;
  word-break: break-all;
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
