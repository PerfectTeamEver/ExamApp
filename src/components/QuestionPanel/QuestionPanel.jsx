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

const QuestionPanel = ({ tests, handleEndTest }) => {
  const [clicked, setClicked] = useState(false);
  const [modifiedTests, setModifiedTests] = useState(tests);
  const [toggleTest, setToggleTest] = useState(0);
  const [currentTest, setCurrentTest] = useState(modifiedTests[0]);

  const Clicking = (click) => {
    setClicked(click);
  };

  const onNextTest = () => {
    if (toggleTest + 1 !== tests.length) {
      setToggleTest(toggleTest + 1);
      setCurrentTest(modifiedTests[toggleTest + 1]);
    }
  };
  const onPreviousTest = () => {
    if (toggleTest !== 0) {
      setToggleTest(toggleTest - 1);
      setCurrentTest(modifiedTests[toggleTest - 1]);
    }
  };

  const handleOptionSelect = (id, option) => {
    const tests = modifiedTests.map((test) => {
      if (test.id === id) {
        return {
          ...test,
          selectedAnswer: option,
        };
      } else {
        return test;
      }
    });

    setModifiedTests(tests);
    setCurrentTest(tests[toggleTest]);
  };

  const handleMap = (index) => {
    setCurrentTest(modifiedTests[index]);
    setToggleTest(index);
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
                testLength={tests.length}
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
