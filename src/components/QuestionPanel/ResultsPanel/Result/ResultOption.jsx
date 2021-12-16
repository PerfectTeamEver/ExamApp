import React from "react";
import { Option } from "./ResultStyle";

const ResultOption = ({ option, selectedAnswer, correct_answer }) => {
  return (
    <Option
      isTrue={option === correct_answer}
      isFalseSelected={
        option === selectedAnswer && correct_answer !== selectedAnswer
      }
    >
      {selectedAnswer === correct_answer
        ? option === correct_answer && "✔ "
        : option === selectedAnswer && <span>x </span>}
      {option}
    </Option>
  );
};

export default ResultOption;
