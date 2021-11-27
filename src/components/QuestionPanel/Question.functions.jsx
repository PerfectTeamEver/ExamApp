import React, { useState } from "react";
import QuestionPanel from "./QuestionPanel";

const QuestionFunctions = ({ tests, handleEndTest }) => {
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

  const handleMap = (index) => {
    setCurrentTest(modifiedTests[index]);
    setToggleTest(index);
  };

  return (
    <QuestionPanel
      modifiedTests={modifiedTests}
      currentTest={currentTest}
      toggleTest={toggleTest}
      testLength={tests.length}
      handleOptionSelect={handleOptionSelect}
      onPreviousTest={onPreviousTest}
      onNextTest={onNextTest}
      handleMap={handleMap}
      handleEndTest={handleEndTest}
    />
  );
};

export default QuestionFunctions;
