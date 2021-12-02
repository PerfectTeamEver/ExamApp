import React from "react";
import { StartContent, Content, TestTitle, StartBtn } from "./StartStyle";
import { ImPlay2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <StartContent>
      <Content>
        <TestTitle>Click a button and Start Test </TestTitle>
        <StartBtn>
          <ImPlay2 /> Start
        </StartBtn>
      </Content>
    </StartContent>
  );
};

export default Start;
