import React from "react";
import ResultOption from "./ResultOption";
import { TestContent, Question } from "./ResultStyle";

const Result = ({ question, answers, ...props }) => {
  return (
    <TestContent>
      <Question>{question}</Question>
      {answers.map((option) => (
        <ResultOption option={option} {...props} />
      ))}
    </TestContent>
  );
};

export default Result;
