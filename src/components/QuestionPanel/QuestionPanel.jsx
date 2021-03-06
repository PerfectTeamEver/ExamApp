import React from "react";
import Question from "./Question/Question";
import {
  Controls,
  Wrapper,
  Btn,
  TestWrapper,
  Test,
} from "./QuestionPanelStyle";
import MapQuestions from "./MapQuestions/MapQuestions";
import { useDispatch } from "react-redux";
import { nextTest, prevTest } from "./../../store/questions/questions-slice";

const QuestionPanel = () => {
  const dispatch = useDispatch();
  return (
    <TestWrapper>
      <Test>
        <Wrapper>
          <Question />
          <Controls>
            <Btn onClick={() => dispatch(prevTest())}>PREVIOUS</Btn>
            <Btn onClick={() => dispatch(nextTest())}>NEXT</Btn>
          </Controls>
        </Wrapper>
        <MapQuestions />
      </Test>
    </TestWrapper>
  );
};

export default QuestionPanel;
