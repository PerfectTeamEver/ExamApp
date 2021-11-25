import React, { useState } from "react";
import Result from "./Result/Result";
import {
   Controls,
   TestNumber,
   ResultContainer,
   Content,
   Wrapper,
   Btn,
} from "./ResultStyle";
import { BsCheckLg } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

const ResultsReview = ({ tests }) => {
   window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = "o/";
      (e || window.event).returnValue = confirmationMessage; //Gecko + IE
      return confirmationMessage; //Webkit, Safari, Chrome
   });
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
   return (
      <ResultContainer>
         <Content>
            <Wrapper>
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
            </Wrapper>
         </Content>
         <Controls>
            <Btn onClick={onPreviousTest}>PREVIOUS</Btn>
            <Btn onClick={onNextTest}>NEXT</Btn>
         </Controls>
      </ResultContainer>
   );
};

export default ResultsReview;
