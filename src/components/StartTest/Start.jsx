import React from "react";
import { StartContent, Content, TestTitle, StartBtn } from "./StartStyle";
import { ImPlay2 } from "react-icons/im";

const Start = ({ clicked, Clicking }) => {
  return (
    <StartContent>
      <Content>
        <TestTitle>Click a button and Start Test </TestTitle>
        <StartBtn onClick={() => Clicking(!clicked)}>
          <ImPlay2 /> Start
        </StartBtn>
      </Content>
    </StartContent>
  );
};

export default Start;
