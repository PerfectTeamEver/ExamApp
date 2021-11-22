import React from "react";
import QuestionOption from "./QuestionOption";
import {
  TestContainer,
  CardContent,
  QuestionText,
  Answers,
} from "./QuestionStyle";

const Question = ({ question, toggleTest, testLength, answers, ...props }) => {
  return (
    <TestContainer>
      <CardContent>
        <p>
          QUESTION - <span>{toggleTest + 1}</span> / {testLength}
        </p>
        <QuestionText>{question}</QuestionText>
        <Answers>
          {answers.map((option) => (
            <QuestionOption option={option} {...props} />
          ))}
        </Answers>
      </CardContent>
    </TestContainer>
  );
};

export default Question;
