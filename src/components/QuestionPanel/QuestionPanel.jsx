import React, { useState } from "react";
import { Link } from "react-router-dom";
import ResultsPanel from "../pages/ResultsPanel";
import Question from "./Question/Question";
import { Controls, TestNumber, Wrapper } from "./QuestionPanel.e";

const QuestionPanel = ({ tests }) => {
   const [modifiedTests, setModifiedTests] = useState(tests);
   const [toggleTest, setToggleTest] = useState(0);
   const [currentTest, setCurrentTest] = useState(modifiedTests[0]);

   const onNextTest = () => {
      if (toggleTest+1 !== tests.length) {
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
      <Wrapper>
         <Controls>
            <button onClick={onPreviousTest}>PREVIOUS</button>
            <button onClick={onNextTest}>NEXT</button>
         </Controls>
         <TestNumber>{toggleTest + 1} - test</TestNumber>
         <Question {...currentTest} handleOptionSelect={handleOptionSelect} />
         {toggleTest === tests.length-1?<Link to="/results"><button>hello</button></Link>:""}
      </Wrapper>
   );
};

export default QuestionPanel;
