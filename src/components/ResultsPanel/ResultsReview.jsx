import React from "react";
import Result from "./Result/Result";
import {
   Controls,
   TestNumber,
   ResultContainer,
   Content,
   Wrapper,
   TestWrapper,
   Btn,
   ResultScore,
} from "./ResultStyle";
import MapResult from "./MapResult/MapResult";
import { BsCheckLg } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import {
   getTests,
   nextTest,
   prevTest,
} from "../../store/questions/questions-slice";
import { useDispatch } from "react-redux";

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
                  <TestNumber>
                     {toggleTest + 1} - test:
                     {currentTest.isTrueAnswered ? (
                        <BsCheckLg style={{ color: "#32CD32" }} />
                     ) : currentTest.isTrueAnswered === false ? (
                        <FaTimes style={{ color: "red" }} />
                     ) : (
                        <h5>not selected</h5>
                     )}
                  </TestNumber>
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
