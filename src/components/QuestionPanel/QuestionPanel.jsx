import React, { useState } from "react";
import Question from "./Question/Question";
import {
  Controls,
  Wrapper,
  Btn,
  TestWrapper,
  Test,
} from "./QuestionPanelStyle";
import MapQuestions from "./MapQuestions/MapQuestions";
import Start from "../StartTest/Start";

const QuestionPanel = ({
  currentTest,
  toggleTest,
  handleOptionSelect,
  onPreviousTest,
  onNextTest,
  modifiedTests,
  handleMap,
  handleEndTest,
  testLength,
}) => {
  const [clicked, setClicked] = useState(false);

  const Clicking = (click) => {
    setClicked(click);
  };

  return (
    <>
      {clicked ? (
        <TestWrapper>
          <Test>
            <Wrapper>
              <Question
                {...currentTest}
                toggleTest={toggleTest}
                testLength={testLength}
                handleOptionSelect={handleOptionSelect}
              />
              <Controls>
                <Btn onClick={onPreviousTest}>PREVIOUS</Btn>
                <Btn onClick={onNextTest}>NEXT</Btn>
              </Controls>
            </Wrapper>
            <MapQuestions
              tests={modifiedTests}
              handleMap={handleMap}
              toggleTest={toggleTest}
              handleEndTest={handleEndTest}
            />
          </Test>
        </TestWrapper>
      ) : (
        <Start clicked={clicked} Clicking={Clicking} />
      )}
    </>
  );
};

export default QuestionPanel;
