import React from "react";
import { useSelector } from "react-redux";
import { getTests } from "../../../store/questions/questions-slice";
import QuestionOption from "./QuestionOption";
import {
   TestContainer,
   CardContent,
   QuestionText,
   Answers,
} from "./QuestionStyle";

const Question = () => {
   const { tests, currentTest, toggleTest } = useSelector(getTests);
   return (
      <TestContainer>
         <CardContent>
            <p>
               QUESTION - <span>{toggleTest + 1}</span> / {tests.length}
            </p>
            <QuestionText>{currentTest.question}</QuestionText>
            <Answers>
               {currentTest.answers.map((option, index) => (
                  <QuestionOption
                     {...currentTest}
                     option={option}
                     key={index}
                  />
               ))}
            </Answers>
         </CardContent>
      </TestContainer>
   );
};

export default Question;
