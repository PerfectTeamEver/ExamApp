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
  TestWrapper,
  Test,
} from "./QuestionPanelStyle";
import { GoStop } from "react-icons/go";
import { ImPlay2 } from "react-icons/im";
import Map from "../Map/Map";

const QuestionPanel = ({ tests, handleEndTest }) => {
  const [cliked, setClicked] = useState(false);
  const [modifiedTests, setModifiedTests] = useState(tests);
  const [toggleTest, setToggleTest] = useState(0);
  const [currentTest, setCurrentTest] = useState(modifiedTests[0]);
  // const [testsAmout, setTestsAmout] = useState(0);

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

  const handleMap = (id, num) => {
    setToggleTest(num - 1);
    const Amount = testsAmount.map((testNum) => {
      if (testNum.id === id) {
        return {
          ...testNum,
          selectedNum: num,
        };
      } else return testNum;
    });

    setTestsAmount(Amount);
    setCurrentTest(modifiedTests[num - 1]);
  };

  // for (let i = 1; i < tests.length; i++) {
  //   setTestsAmout(testsAmout + 1);
  // }
  const [testsAmount, setTestsAmount] = useState([
    { num: 1, id: 1 },
    { num: 2, id: 2 },
    { num: 3, id: 3 },
    { num: 4, id: 4 },
    { num: 5, id: 5 },
  ]);

  return (
    <>
      {cliked ? (
        <TestWrapper>
          <Test>
            <Wrapper>
              <Link to="/results">
                <StopTest onClick={() => handleEndTest(modifiedTests)}>
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
            <Map
              testsAmount={testsAmount}
              toggleTest={toggleTest}
              handleMap={handleMap}
            />
          </Test>
        </TestWrapper>
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
