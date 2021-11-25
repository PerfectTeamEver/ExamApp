import React, { useState } from "react";
import Result from "./Result/Result";
import {
  Controls,
  TestNumber,
  ResultContainer,
  Content,
  Wrapper,
  TestWrapper,
  Btn,
} from "./ResultStyle";
import MapResult from "./MapResult/MapResult";
import { BsCheckLg } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

const ResultsReview = ({ tests }) => {
  const [toggleTest, setToggleTest] = useState(0);
  const [currentTest, setCurrentTest] = useState(tests[0]);

  const onNextTest = () => {
    if (toggleTest + 1 !== tests.length) {
      setToggleTest(toggleTest + 1);
      setCurrentTest(tests[toggleTest + 1]);
    }
  };
  const onPreviousTest = () => {
    if (toggleTest !== 0) {
      setToggleTest(toggleTest - 1);
      setCurrentTest(tests[toggleTest - 1]);
    }
  };

  const handleMap = (index) => {
    setToggleTest(index);
    setCurrentTest(tests[index]);
  };
  return (
    <ResultContainer>
      <Content>
        <Wrapper>
          <TestWrapper>
            <h3>Results</h3>
            <TestNumber>
              {toggleTest + 1} - test:
              {currentTest.isTrueAnswered ? (
                <BsCheckLg style={{ color: "#32CD32" }} />
              ) : (
                <FaTimes style={{ color: "red" }} />
              )}
            </TestNumber>
            <Result {...currentTest} />
          </TestWrapper>
          <Controls>
            <Btn onClick={onPreviousTest}>PREVIOUS</Btn>
            <Btn onClick={onNextTest}>NEXT</Btn>
          </Controls>
        </Wrapper>
        <MapResult
          {...currentTest}
          toggleTest={toggleTest}
          tests={tests}
          handleMap={handleMap}
        />
      </Content>
    </ResultContainer>
  );
};

export default ResultsReview;
