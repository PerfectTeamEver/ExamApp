import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ResultsPanel from "../pages/ResultsPanel";
import Question from "./Question/Question";
import {
  StartContent,
  Content,
  TestTitle,
  StartBtn,
  Controls,
  Wrapper,
  Btn,
  StopTest,
} from "./QuestionPanelStyle";
import { GoStop } from "react-icons/go";
import { ImPlay2 } from "react-icons/im";

const QuestionPanel = ({ tests }) => {
  const [cliked, setClicked] = useState(false);
  const [modifiedTests, setModifiedTests] = useState(tests);
  const [toggleTest, setToggleTest] = useState(0);
  const [currentTest, setCurrentTest] = useState(modifiedTests[0]);

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
  console.log("modifiedTests", modifiedTests);

  return (
    <>
      {cliked ? (
        <Wrapper>
          <Link to="/results">
            <StopTest>
              <GoStop /> Stop the Test
            </StopTest>
          </Link>
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
      ) : (
        <StartContent>
          <Content>
            <TestTitle>Click a button and Start Test </TestTitle>
            <StartBtn onClick={() => setClicked(!cliked)}>
              <ImPlay2 /> Start
            </StartBtn>
          </Content>
        </StartContent>
      )}
    </>
  );
};

export default QuestionPanel;
