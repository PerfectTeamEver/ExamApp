import React from "react";
import Result from "./Result/Result";
import {
  Controls,
  ResultContainer,
  Content,
  Wrapper,
  TestWrapper,
  Btn,
  ResultScore,
} from "./ResultStyle";
import MapResult from "./MapResult/MapResult";

import { useSelector } from "react-redux";
import {
  getTests,
  nextTest,
  prevTest,
} from "../../store/questions/questions-slice";
import { useDispatch } from "react-redux";
import TestNumber from "./TestNumber/TestNumber";

const ResultsReview = () => {
  const { toggleTest, currentTest, score } = useSelector(getTests);
  const dispatch = useDispatch();
  return (
    <ResultContainer>
      <Content>
        <Wrapper>
          <TestWrapper>
            <ResultScore>
              Results : <span>{score} ball</span>
            </ResultScore>
            <TestNumber toggleTest={toggleTest} currentTest={currentTest} />
            <Result {...currentTest} />
          </TestWrapper>
          <Controls>
            <Btn onClick={() => dispatch(prevTest())}>PREVIOUS</Btn>
            <Btn onClick={() => dispatch(nextTest())}>NEXT</Btn>
          </Controls>
        </Wrapper>
        <MapResult />
      </Content>
    </ResultContainer>
  );
};

export default ResultsReview;
