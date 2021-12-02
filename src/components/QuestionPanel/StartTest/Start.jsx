import React from "react";
import { StartContent, Content, TestTitle, StartBtn } from "./StartStyle";
import { ImPlay2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { fetchAsyncTests } from "./../../../store/questions/questions-slice";
import { useDispatch } from "react-redux";

const Start = () => {
  const dispatch = useDispatch();
  return (
    <StartContent>
      <Content>
        <TestTitle>Click a button and Start Test </TestTitle>
        <Link to="/exam/quiz" onClick={() => dispatch(fetchAsyncTests())}>
          <StartBtn>
            <ImPlay2 /> Start
          </StartBtn>
        </Link>
      </Content>
    </StartContent>
  );
};

export default Start;
