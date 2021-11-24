import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import MapQuestions from "./MapQuestions/MapQuestions";

const QuestionPanel = ({ tests, handleEndTest }) => {
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
            <MapQuestions tests={modifiedTests} handleMap={handleMap} />
         </Test>
      </TestWrapper>
   );
};

export default QuestionPanel;
